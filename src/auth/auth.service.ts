import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { firstValueFrom } from 'rxjs';
import { UserMSG } from 'src/common/constants';
import { ClientProxyApp } from 'src/common/proxy/client-proxy';
import config from 'src/config';
import { LoginUserDto, RegisterUserDto } from 'src/user/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(config.KEY)
    private readonly configService: ConfigType<typeof config>,
    private readonly clientProxy: ClientProxyApp,
    private readonly jwtService: JwtService,
  ) {}

  private _clientProxyUser = this.clientProxy.clientProxyUsers();
  async validateUser(username: string, password: string): Promise<any> {
    try {
      const user = await firstValueFrom(
        this._clientProxyUser.send(UserMSG.VALID_USER, {
          username,
          password,
        }),
      );
      return user;
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  async login({ email, password }: LoginUserDto) {
    try {
      const user = await firstValueFrom(
        this._clientProxyUser.send(UserMSG.FIND_EMAIL, email),
      );

      if (!user) {
        throw new NotFoundException(
          'No existe una cuenta asociada a este correo',
        );
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const payload: { email: string } = {
        email: user.email,
      };

      const accessToken: string = await this.jwtService.signAsync({
        ...payload,
      });

      const refreshToken: string = await this.jwtService.signAsync(
        {
          ...payload,
        },
        {
          secret: this.configService.jwt.refreshSecret,
          expiresIn: this.configService.jwt.refreshExpiresIn,
        },
      );

      const response: {
        statusCode: number;
        message: string;
        success: boolean;
        data: { accessToken: string; refreshToken: string };
      } = {
        statusCode: 200,
        message: 'Login successful',
        success: true,
        data: {
          accessToken: accessToken,
          refreshToken: refreshToken,
        },
      };

      return response;
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        return {
          statusCode: 401,
          message: error.message,
          success: false,
        };
      }
      return error;
    }
  }

  async register(registerDto: RegisterUserDto) {
    const result = await firstValueFrom(
      this._clientProxyUser.send(UserMSG.CREATE, registerDto),
    );
    return result;
  }

  async refresh(refreshToken: string) {
    try {
      const { email } = await this.jwtService.verify(refreshToken, {
        secret: this.configService.jwt.refreshSecret,
      });

      const user = await firstValueFrom(
        this._clientProxyUser.send(UserMSG.FIND_EMAIL, email),
      );

      const newToken = this.jwtService.sign({
        username: user.userName,
        sub: user.id,
      });

      return newToken;
    } catch (e) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
