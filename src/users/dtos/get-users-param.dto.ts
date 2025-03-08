import { IsInt, IsOptional } from 'class-validator';

import { Type } from 'class-transformer';

import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetUsersParamDto {
  @ApiPropertyOptional()
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  id: number;
}
