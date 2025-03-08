import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}
  public findByUserId(userId: string) {
    const user = this.usersService.findById(userId);
    return {
      user,
    };
  }
}
