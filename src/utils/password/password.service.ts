import { Injectable } from '@nestjs/common';
import { pbkdf2Sync, randomBytes } from 'crypto';

@Injectable()
export class PasswordService {
  async getSalt() {
    const salt = await randomBytes(16).toString('hex');
    return salt;
  }

  async getHash(password: string, salt: string) {
    const hash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return hash;
  }
}
