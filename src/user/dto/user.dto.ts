import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly username: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}

export class UpdateUserDTO {
  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly fullName?: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly username?: string;
  @ApiProperty()
  @IsEmail()
  @IsOptional()
  readonly email?: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly password?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly role?: string;
}
