import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CookieService } from 'src/cookie/cookie.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PasswordService } from 'src/password/password.service';
import { PrismaService } from 'src/utils/prisma.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '30d' }
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, CookieService, PasswordService, PrismaService],
})
export class AuthModule {}