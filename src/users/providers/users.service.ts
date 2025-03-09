import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 *Class to connect users table and perform operation
 */
@Injectable()
export class UsersService {
  /**
   *
   * @param authService
   * Constructor
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /**
   *
   * @param getUsersParamDto
   * @param limit
   * @param page
   * @returns
   * method to return all users
   */
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [];
  }

  /**
   *
   * @param id
   * @returns
   * method to return user by id
   */
  public findById(id: string) {
    return {
      id: 123,
    };
  }
}
