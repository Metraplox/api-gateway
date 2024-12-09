import {
  Body,
  Controller,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserDTO } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';
import { RefreshTokenGuard } from './guards/refresh.guard';
import { LoginUserDto, RegisterUserDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginUserInput: LoginUserDto) {
    return await this.authService.login({ ...loginUserInput });
  }

  @Post('register')
  async register(@Body() registerUserInput: RegisterUserDto) {
    return await this.authService.register({
      ...registerUserInput,
    });
  }

  @Post('update-jwt')
  @UseGuards(RefreshTokenGuard)
  async updateJWT(@Request() req) {
    const { refreshToken } = req.body;
    try {
      const updatedToken = await this.authService.refresh(refreshToken);
      return {
        statusCode: 200,
        success: true,
        message: 'JWT updated succesfully',
        data: updatedToken,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to update JWT',
        error: (error as Record<string, string>)?.message,
      };
    }
  }
}
