import { Module } from '@nestjs/common';
import { CartsProductsService } from './carts_products.service';
import { CartsProductsController } from './carts_products.controller';
import { PrismaService } from 'src/utils/db/prisma.service';

@Module({
  controllers: [CartsProductsController],
  providers: [CartsProductsService, PrismaService],
})
export class CartsProductsModule {}
