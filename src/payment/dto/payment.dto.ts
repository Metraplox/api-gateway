import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class PaymentDto {
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  buyer: string;

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  items: string[];
}

export class ConfirmationDto {
  @IsNotEmpty()
  @IsString()
  token: string;
}

export class CheckTransactionDto {
  @IsNotEmpty()
  @IsString()
  token: string;
}
