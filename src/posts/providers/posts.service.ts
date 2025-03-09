import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { MetaOption } from 'src/metaoptions/meta-option.entity';

@Injectable()
export class PostsService {
  constructor(
    private readonly postRepository: Repository<Post>,
    private readonly metaOptionsRepository: Repository<MetaOption>,
    private readonly usersService: UsersService,
  ) {}

  public findByUserId(userId: string) {
    const user = this.usersService.findById(userId);
    return {
      user,
    };
  }
}
