import { Body, Controller, Post } from '@nestjs/common';
import { MetaoPtionsService } from './providers/metao-ptions.service';
import { CreatePostMeataOptionsDto } from './dtos/create-post-meta-options.dto';

@Controller('metaoptions')
export class MetaoptionsController {
  constructor(private readonly metaOptionsService: MetaoPtionsService) {}

  @Post()
  public create(
    @Body()
    createPostMetaOptionsDto: CreatePostMeataOptionsDto,
  ) {
    return this.metaOptionsService.create(createPostMetaOptionsDto);
  }
}
