import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { CreatePostDto } from '../dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/metaoptions/meta-option.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
    private readonly usersService: UsersService,
  ) {}

  public async create(createPostDto: CreatePostDto) {
    // let metaOptions = createPostDto.metaOptions
    //   ? this.metaOptionsRepository.create(createPostDto.metaOptions)
    //   : null;

    // if (metaOptions) {
    //   await this.metaOptionsRepository.save(metaOptions);
    // }

    let post = this.postRepository.create({
      ...createPostDto,
      metaOptions: createPostDto.metaOptions ?? undefined,
    });

    // if (metaOptions) {
    //   post.metaOptions = metaOptions;
    // }
    await this.postRepository.save(post);

    return post;
  }

  public async findAll() {
    let posts = await this.postRepository.find({
      relations: {
        metaOptions: true,
      },
    });
    return posts;
  }

  public findByUserId(userId: string) {
    const user = this.usersService.findById(userId);
    return {
      user,
    };
  }

  public async delete(id: number) {
    const post = await this.postRepository.findOneBy({ id });

    await this.postRepository.delete(id);

    await this.metaOptionsRepository.delete({ id: post?.metaOptions?.id });

    return { delete: true, id };
  }
}
