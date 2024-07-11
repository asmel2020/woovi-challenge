import { IsNotEmpty, IsEmail, IsString, IsNumber, Min, Max } from "class-validator";

export class CreatePaymentDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0.1)
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(7)
  installment: number;
}
