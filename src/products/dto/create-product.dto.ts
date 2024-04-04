import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Santo Stefano Vacanze romane' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 499 })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  image_id: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  type_id: number;
}
