import { IsNotEmpty, IsEmail, IsString, IsNumber, Min, Max } from "class-validator";

export class CreatePaymentPixDTO {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(7)
  installment: number;
}
