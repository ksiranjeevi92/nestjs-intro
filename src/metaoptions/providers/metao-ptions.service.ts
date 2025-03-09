import { Injectable } from '@nestjs/common';
import { CreatePostMeataOptionsDto } from '../dtos/create-post-meta-options.dto';
import { Repository } from 'typeorm';
import { MetaOption } from '../meta-option.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetaoPtionsService {
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}

  public async create(cretePostMetaOptionsDtp: CreatePostMeataOptionsDto) {
    let metaOptions = this.metaOptionsRepository.create(
      cretePostMetaOptionsDtp,
    );

    return await this.metaOptionsRepository.save(metaOptions);
  }
}
