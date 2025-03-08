import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  public isAuth(): boolean {
    return true;
  }
}
