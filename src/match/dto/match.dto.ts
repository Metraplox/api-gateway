import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMatchDto {
  @IsString()
  @IsNotEmpty()
  idTeamA: string;

  @IsString()
  @IsNotEmpty()
  idTeamB: string;
}
