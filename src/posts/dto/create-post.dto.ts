import { postType } from '../enums/post-type.enum';
import { postStatus } from '../enums/postStatus.enum';
import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MinLength,
  Matches,
  ValidateNested,
  MaxLength,
  IsInt,
} from 'class-validator';

import { Type } from 'class-transformer';
import { CreatePostMeataOptionsDto } from '../../metaoptions/dtos/create-post-meta-options.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    example: 'This is title',
    description: 'This is the title for post',
  })
  @IsString()
  @MaxLength(512)
  @MinLength(4)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    enum: postType,
    description: "Possible valus, 'post', 'page', 'stories', ''",
  })
  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType;

  @ApiProperty({
    description: 'Slug ',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: 'Slug field' })
  slug: string;

  @ApiProperty({
    enum: postStatus,
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;

  @ApiPropertyOptional({
    description: '',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description: 'Serialize your josn object',
  })
  @IsJSON()
  @IsOptional()
  schema?: string;

  @ApiPropertyOptional({
    description: 'feature image for blog post',
    example: 'https://localhost:3000',
  })
  @IsUrl()
  @IsOptional()
  @MaxLength(1024)
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    description: 'Date',
    example: '2024-03-16T07:46:32+0000',
  })
  @IsISO8601()
  @IsOptional()
  publishedOn?: Date;

  @ApiPropertyOptional({
    description: 'An array of tags passed as int value',
    example: [1, 1],
  })
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  tags?: number[];

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMeataOptionsDto)
  metaOptions?: CreatePostMeataOptionsDto | null;

  @ApiProperty({
    type: 'integer',
  })
  @IsNotEmpty()
  @IsInt()
  authorId: number;
}
