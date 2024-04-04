import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/utils/db/prisma.service';
import { ImagesService } from 'src/images/images.service';
import { TypesService } from 'src/types/types.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService, ImagesService, TypesService],
})
export class ProductsModule {}
