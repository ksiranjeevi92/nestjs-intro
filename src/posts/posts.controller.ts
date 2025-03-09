import { Controller, Get, Param, Post, Body, Patch } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { patchPostDto } from './dto/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/{:userId}')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findByUserId(userId);
  }

  @ApiOperation({
    summary: 'create new post',
  })
  @ApiResponse({
    status: 201,
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {}

  @Patch()
  public updatePost(@Body() patchPostDto: patchPostDto) {
    console.log(patchPostDto);
  }
}
