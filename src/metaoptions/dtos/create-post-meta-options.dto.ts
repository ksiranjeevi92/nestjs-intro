import { IsJSON, IsNotEmpty } from 'class-validator';

export class CreatePostMeataOptionsDto {
  // @IsString()
  // @IsNotEmpty()
  // key: string;
  // @IsNotEmpty()
  // value: any;

  @IsNotEmpty()
  @IsJSON()
  metaValue: string;
}
