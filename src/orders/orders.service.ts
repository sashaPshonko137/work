import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/utils/db/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private db: PrismaService) {}
  async create(createOrderDto: CreateOrderDto) {
    await this.db.orders.create({ data: { ...createOrderDto } });
    return 'Покупка записана.';
  }

  async findAll(page: number = 1, limit: number = 16) {
    const offset = (page - 1) * limit;
    const totalCount = await this.db.orders.count();
    const orders = await this.db.orders.findMany({
      take: limit,
      skip: offset,
    });
    return { totalCount, orders };
  }

  async findOne(id: number) {
    const order = await this.db.orders.findFirst({ where: { id } });
    if (!order) {
      throw new NotFoundException('id указан неверно');
    }
    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.findOne(id);
    if (!order) {
      throw new NotFoundException('id указан неверно');
    }
    const updatedUser = await this.db.orders.update({
      where: { id },
      data: { ...updateOrderDto },
    });
    return order;
  }

  async remove(id: number) {
    const order = await this.findOne(id);
    if (!order) {
      throw new NotFoundException('id указан неверно');
    }
    await this.db.orders.delete({ where: { id } });
    return 'Покупка удалена.';
  }
}
