import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  @IsString()
  hash: string;
  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  @IsString()
  salt: string;
  @ApiProperty({ example: 'Иванов' })
  @IsNotEmpty()
  @IsString()
  surname: string;
  @ApiProperty({ example: 'Иван' })
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty({ example: 'Иванович' })
  @IsNotEmpty()
  @IsString()
  lastname: string;
}
