import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/utils/db/prisma.service';

@Injectable()
export class ImagesService {
  constructor(private db: PrismaService) {}
  async create(file: Express.Multer.File) {
    const image = await this.db.images.create({
      data: {
        filename: file.filename,
        originalname: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
      },
    });
    console.log(file);
    return image;
  }

  async findOne(id: number) {
    const image = await this.db.images.findFirst({ where: { id } });

    if (!image) {
      throw new NotFoundException('такого изображения не существует.');
    }
    return image;
  }
}
