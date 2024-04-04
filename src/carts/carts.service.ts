import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/utils/db/prisma.service';

@Injectable()
export class CartsService {
  constructor(private db: PrismaService) {}
  async create(createCartDto: CreateCartDto) {
    await this.db.carts.create({ data: { ...createCartDto } });
    return 'Корзина создана.';
  }

  async findAll(page: number = 1, limit: number = 16) {
    const offset = (page - 1) * limit;
    const totalCount = await this.db.carts.count();
    const carts = await this.db.carts.findMany({
      take: limit,
      skip: offset,
    });
    return { totalCount, carts };
  }

  async findOne(id: number) {
    const cart = await this.db.carts.findFirst({ where: { id } });
    if (!cart) {
      throw new NotFoundException('id указан неверно.');
    }
    return cart;
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const cart = await this.findOne(id);
    if (!cart) {
      throw new NotFoundException('id указан неверно.');
    }
    await this.db.carts.update({ where: { id }, data: { ...updateCartDto } });
    return 'Корзина обновлена.';
  }

  async remove(id: number) {
    const cart = await this.findOne(id);
    if (!cart) {
      throw new NotFoundException('id указан неправильно.');
    }
    await this.db.carts.delete({ where: { id } });
    return 'Корзина удалена.';
  }

  async clear(id: number) {
    const cart = await this.findOne(id);
    if (!cart) {
      throw new NotFoundException('id указан неправильно.');
    }
    this.db.carts_products.deleteMany({ where: { id: cart.id } });
    return 'Корзина очищена.';
  }
}
