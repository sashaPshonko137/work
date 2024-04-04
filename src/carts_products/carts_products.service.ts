import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartsProductDto } from './dto/create-carts_product.dto';
import { UpdateCartsProductDto } from './dto/update-carts_product.dto';
import { PrismaService } from 'src/utils/db/prisma.service';

@Injectable()
export class CartsProductsService {
  constructor(private db: PrismaService) {}
  async create(createCartsProductDto: CreateCartsProductDto) {
    await this.db.carts_products.create({ data: { ...createCartsProductDto } });
    return 'Продукт в корзине созддан.';
  }

  async findAll(page: number = 1, limit: number = 16) {
    const offset = (page - 1) * limit;
    const totalCount = await this.db.carts_products.count();
    const carts_products = await this.db.carts_products.findMany({
      take: limit,
      skip: offset,
    });
    return { totalCount, carts_products };
  }

  async findOne(id: number) {
    const cart_product = await this.db.carts_products.findFirst({
      where: { id },
    });
    if (!cart_product) {
      throw new NotFoundException('id уазан неверно.');
    }
    return cart_product;
  }

  async update(id: number, updateCartsProductDto: UpdateCartsProductDto) {
    const cart_product = await this.findOne(id);
    if (!cart_product) {
      throw new NotFoundException('id уазан неверно.');
    }
    await this.db.carts_products.update({
      where: { id },
      data: { ...cart_product },
    });
    return 'Продукт в корзине удалён.';
  }

  async remove(id: number) {
    const cart_product = await this.findOne(id);
    if (!cart_product) {
      throw new NotFoundException('id уазан неверно.');
    }
    await this.db.carts_products.delete({ where: { id } });
    return 'Продукт в корзине удалён.';
  }
}
