import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { PrismaService } from 'src/utils/db/prisma.service';
import { ImagesService } from 'src/images/images.service';

@Module({
  controllers: [TypesController],
  providers: [TypesService, PrismaService, ImagesService],
})
export class TypesModule {}
