import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Query,
  Body,
  Ip,
  Headers,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import {
  ApiTags,
  ApiParam,
  ApiOperation,
  ApiResponse,
  ApiQuery,
} from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('{:id}')
  @ApiOperation({
    summary: 'Fetch all users from database',
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the query',
  })
  @ApiQuery({
    name: 'limit',
    type: String,
    description: 'description',
    required: false,
  })
  @ApiQuery({
    name: 'page',
    type: String,
    required: false,
    description: 'description',
  })
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ): string {
    this.usersService.findAll(getUsersParamDto, limit, page);
    return 'users from the controller';
  }
  @Post()
  public createUser(@Body() createUserDto: CreateUserDto): string {
    return 'users from the controller';
  }

  @Patch()
  public patchUser(@Param() patchUserDto: PatchUserDto): any {
    return patchUserDto;
  }
}
