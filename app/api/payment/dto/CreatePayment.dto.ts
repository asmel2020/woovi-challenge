import { IsNotEmpty, IsEmail, IsString, IsNumber, Min } from "class-validator";

export class CreatePaymentDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0.1)
  amount: number;
}
