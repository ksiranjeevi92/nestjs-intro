import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { CreatePostDto } from '../dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/metaoptions/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { patchPostDto } from '../dto/patch-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
    private readonly usersService: UsersService,
    private readonly tagsService: TagsService,
  ) {}

  public async create(createPostDto: CreatePostDto) {
    // let metaOptions = createPostDto.metaOptions
    //   ? this.metaOptionsRepository.create(createPostDto.metaOptions)
    //   : null;

    // if (metaOptions) {
    //   await this.metaOptionsRepository.save(metaOptions);
    // }

    let author = await this.usersService.findById(createPostDto.authorId);

    let tags = await this.tagsService.findMultipletags(
      createPostDto.tags ?? [],
    );

    let post = this.postRepository.create({
      ...createPostDto,
      metaOptions: createPostDto.metaOptions ?? undefined,
      author: author ?? undefined,
      tags: tags,
    });

    // if (metaOptions) {
    //   post.metaOptions = metaOptions;
    // }
    await this.postRepository.save(post);

    return post;
  }

  public async update(patchPostDto: patchPostDto) {
    // Find new tags
    let tags = await this.tagsService.findMultipletags(patchPostDto.tags || []);

    // Find the post
    let post = await this.postRepository.findOneBy({
      id: patchPostDto.id,
    });

    if (!post) {
      throw new NotFoundException(`Post with ID ${patchPostDto.id} not found`);
    }

    // Update post related properties
    post.title = patchPostDto.title ?? post.title;
    post.content = patchPostDto.content ?? post.content;
    post.status = patchPostDto.status ?? post.status;
    post.postType = patchPostDto.postType ?? post.postType;
    post.slug = patchPostDto.slug ?? post.slug;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = patchPostDto.publishedOn ?? post.publishOn;

    // Update the tags
    post.tags = tags;

    return await this.postRepository.save(post);
  }

  public async findAll() {
    let posts = await this.postRepository.find({
      relations: {
        metaOptions: true,
        author: true,
      },
    });
    return posts;
  }

  public async delete(id: number) {
    const post = await this.postRepository.findOneBy({ id });

    await this.postRepository.delete(id);

    await this.metaOptionsRepository.delete({ id: post?.metaOptions?.id });

    return { delete: true, id };
  }
}
