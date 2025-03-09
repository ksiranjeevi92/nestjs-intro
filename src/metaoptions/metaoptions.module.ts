import { Module } from '@nestjs/common';
import { MetaoptionsController } from './metaoptions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOption } from './meta-option.entity';

@Module({
  controllers: [MetaoptionsController],
  imports: [TypeOrmModule.forFeature([MetaOption])],
})
export class MetaoptionsModule {}
