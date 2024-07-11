import {
  IsNotEmpty,
  IsEmail,
  IsString,
  IsNumber,
  Min,
  Max,
  Length,
  MinLength,
  MaxLength,
} from "class-validator";

export class CreatePaymentCreditCardDTO {
  @IsNotEmpty()
  @IsString()
  paymentId: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(11)
  cpf: string;

  @IsNotEmpty()
  @IsString()
  @Length(4)
  last4DigitsCreditCard: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(7)
  installment: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  amountInstallment: number;
}
