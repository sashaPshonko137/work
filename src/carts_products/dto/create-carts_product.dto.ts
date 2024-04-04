import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCartsProductDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  cart_id: number;
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  product_id: number;
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
