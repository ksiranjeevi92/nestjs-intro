import { Module, forwardRef } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './providers/users.service';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ConfigModule } from '@nestjs/config';
import { UserCreateManyProvider } from './providers/user-create-many.provider';
import { CreateUserProvider } from './providers/create-user.provider';
import { FindOneUserByEmail } from './providers/find-one-user-by-email';
import profileConfig from './config/profile.config';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserCreateManyProvider, CreateUserProvider, FindOneUserByEmail],
  exports: [UsersService],
  imports: [
    ConfigModule.forFeature(profileConfig),
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([User]),
  ],
})
export class UsersModule {}
