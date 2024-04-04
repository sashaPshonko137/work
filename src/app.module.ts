import { Module } from '@nestjs/common';
import { PrismaService } from './utils/db/prisma.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { TypesModule } from './types/types.module';
import { ImagesModule } from './images/images.module';
import { CartsModule } from './carts/carts.module';
import { OrdersModule } from './orders/orders.module';
import { CartsProductsModule } from './carts_products/carts_products.module';
import { AuthModule } from './auth/auth.module';
import { PasswordService } from './utils/password/password.service';
import { CookieService } from './utils/cookie/cookie.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    UsersModule,
    ProductsModule,
    TypesModule,
    ImagesModule,
    CartsModule,
    OrdersModule,
    CartsProductsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [PrismaService, PasswordService, CookieService, JwtService],
})
export class AppModule {}
