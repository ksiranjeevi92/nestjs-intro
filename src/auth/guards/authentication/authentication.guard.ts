import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AcessTokenGuard } from '../acess-token/acess-token.guard';
import { AuthType } from 'src/auth/enums/auth-type.enum';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  private static readonly defaultAuthType = AuthType.Bearer;

  // private readonly authTypeGuardMap = {
  //   [AuthType.Bearer]: this.accessTokenGuard,
  //   [AuthType.None]: { canActivate: () => true },
  //   this.canActivate
  // };

  constructor(
    private readonly reflector: Reflector,
    private readonly accessTokenGuard: AcessTokenGuard,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }
}
