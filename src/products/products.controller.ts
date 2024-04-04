import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { ImagesService } from 'src/images/images.service';
import { AdminGuard } from 'src/utils/guards/admin.guard';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private imagesService: ImagesService,
  ) {}

  @Post()
  @UseGuards(AdminGuard)
  create(@Body() createProuctDto: CreateProductDto) {
    return this.productsService.create(createProuctDto);
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 16,
    @Query('minPrice', ParseIntPipe) minPrice?: number,
    @Query('maxPrice', ParseIntPipe) maxPrice?: number,
  ) {
    let filterObject: any = { deleted: false };

    return this.productsService.findAll(
      page,
      limit,
      filterObject,
      minPrice,
      maxPrice,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AdminGuard)
  update(@Param('id') id: string, @Body() updateProuctDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProuctDto);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
