import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignInDto {
  @ApiProperty({example: 'user@mail.com'})
  @IsNotEmpty()
  @IsEmail()
  email: string
  @ApiProperty({example: '1242'})
  @IsNotEmpty()
  @IsString()
  password: string
}