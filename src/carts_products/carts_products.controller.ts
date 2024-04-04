import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { CartsProductsService } from './carts_products.service';
import { CreateCartsProductDto } from './dto/create-carts_product.dto';
import { UpdateCartsProductDto } from './dto/update-carts_product.dto';
import { ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/utils/guards/admin.guard';
@ApiTags('cart_products')
@Controller('carts-products')
export class CartsProductsController {
  constructor(private readonly cartsProductsService: CartsProductsService) {}

  @Post()
  create(@Body() createCartsProductDto: CreateCartsProductDto) {
    return this.cartsProductsService.create(createCartsProductDto);
  }

  @Get()
  @UseGuards(AdminGuard)
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 16,
  ) {
    return this.cartsProductsService.findAll(page, limit);
  }

  @Get(':id')
  @UseGuards(AdminGuard)
  findOne(@Param('id') id: string) {
    return this.cartsProductsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCartsProductDto: UpdateCartsProductDto,
  ) {
    return this.cartsProductsService.update(+id, updateCartsProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartsProductsService.remove(+id);
  }
}
