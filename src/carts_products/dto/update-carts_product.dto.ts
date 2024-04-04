import { PartialType } from '@nestjs/swagger';
import { CreateCartsProductDto } from './create-carts_product.dto';

export class UpdateCartsProductDto extends PartialType(CreateCartsProductDto) {}
