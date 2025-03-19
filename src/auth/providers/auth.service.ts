import { Injectable } from '@nestjs/common';
import { SignInDto } from '../dtos/signin.dto';
import { SignInProvider } from './sign-in.provider';

@Injectable()
export class AuthService {
  constructor(private readonly signInProvider: SignInProvider) {}
  public isAuth(): boolean {
    return true;
  }

  public async singIn(singInDto: SignInDto) {
    //Find the user using email ID
    return this.signInProvider.signIn(singInDto);
    //Throw an exception if user not found
    //Compare the password that sent by user and has by user table
    //Send comfirmation
  }
}
