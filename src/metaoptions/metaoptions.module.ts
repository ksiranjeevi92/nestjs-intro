import { Module } from '@nestjs/common';
import { MetaoptionsController } from './metaoptions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOption } from './meta-option.entity';
import { MetaoPtionsService } from './providers/metao-ptions.service';

@Module({
  controllers: [MetaoptionsController],
  imports: [TypeOrmModule.forFeature([MetaOption])],
  providers: [MetaoPtionsService],
})
export class MetaoptionsModule {}
