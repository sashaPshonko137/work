import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  user_id: number;
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  products_id: number;
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  summary: number;
}
