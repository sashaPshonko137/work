import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { Response } from 'express';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CookieService } from 'src/utils/cookie/cookie.service';
import { AuthGuard } from './auth.guard';
import { SignUpDto } from './dto/signup.dto';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private cookieService: CookieService,
  ) {}
  @Post('sign-up')
  @ApiCreatedResponse()
  async signUp(
    @Body() signUpDto: SignUpDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { token } = await this.authService.signUp(
      signUpDto.email,
      signUpDto.password,
      signUpDto.surname,
      signUpDto.name,
      signUpDto.lastname,
    );
    this.cookieService.setToken(res, token);
    return { token };
  }

  @Post('sign-in')
  @ApiCreatedResponse()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @ApiOkResponse()
  async signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { token } = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );
    this.cookieService.setToken(res, token);
    return { token };
  }

  @Post('sign-out')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @ApiOkResponse()
  async signOut(@Res({ passthrough: true }) res: Response) {
    this.cookieService.removeToken(res);
  }
}
