import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from 'src/auth/config/jwt.config';

import { Request } from 'express';
import { REQUEST_USER_KEY } from 'src/auth/constants/auth.constant';

@Injectable()
export class AcessTokenGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService /**
     * Inject JWT
     */,
    /***
     * Inject JWT configuration
     */
    @Inject(() => jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    //Extract the request from the execution context
    const request = context.switchToHttp().getRequest();
    //extract the token from the header
    const token = this.extractRequestFromheader(request);
    //Validate the token
    if (!token) {
      throw new UnauthorizedException('');
    }

    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        this.jwtConfiguration,
      );
      request[REQUEST_USER_KEY] = payload;
      console.log(payload);
    } catch (error) {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractRequestFromheader(request: Request) {
    const [_, token] = request.headers.authorization?.split(' ') ?? [];

    return token;
  }
}
