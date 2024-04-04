import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class signUpDto {
  @ApiProperty({example: 'user@mail.com'})
  @IsNotEmpty()
  @IsEmail()
  email: string
  @ApiProperty({example: '1242'})
  @IsNotEmpty()
  @IsString()
  password: string
  @ApiProperty({example: 'Иванов'})
  @IsNotEmpty()
  @IsString()
  surname
  @ApiProperty({example: 'Иван'})
  @IsNotEmpty()
  @IsString()
  name
  @ApiProperty({example: 'Иванович'})
  @IsNotEmpty()
  @IsString()
  lastname
}