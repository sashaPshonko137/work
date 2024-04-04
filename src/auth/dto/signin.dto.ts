import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SignInDto {
  @ApiProperty({ example: 'user@mail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty({ example: '12421242' })
  @Length(7, 25, { message: 'Длина должна быть от 7 до 25 символов' })
  @IsString()
  password: string;
}
