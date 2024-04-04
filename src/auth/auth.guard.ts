import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { CookieService } from 'src/utils/cookie/cookie.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    cookieService: CookieService,
  ) {}
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest() as Request;
    const token = req.cookies[CookieService.tokenKey];
    if (!token) {
      throw new UnauthorizedException('Почта или пароль указаны неверно');
    }

    try {
      const data = this.jwtService.verifyAsync(token, {
        secret: process.env.SECRET_KEY,
      });
      req['session'] = data;
    } catch (error) {}
    return true;
  }
}
