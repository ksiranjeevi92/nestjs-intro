import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostMeataOptionsDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  value: any;
}
