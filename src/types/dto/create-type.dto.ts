import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTypeDto {
  @ApiProperty({ example: 'vines' })
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  image_id: number;
}
