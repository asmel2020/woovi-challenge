import { IsNotEmpty, IsEmail, IsString, IsNumber, Min, IsUUID } from "class-validator";

export class FindOnePayment {
  @IsNotEmpty()
  @IsString()
  id: string;
}
