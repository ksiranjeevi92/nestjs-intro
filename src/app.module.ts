import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';
import { TagsModule } from './tags/tags.module';
import { MetaoptionsModule } from './metaoptions/metaoptions.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        // entities: [User],
        autoLoadEntities: true,
        /**
         * synchronize is only for development
         */
        synchronize: true,
        port: 5432,
        username: 'admin',
        password: 'password',
        host: 'localhost',
        database: 'nestjs_users',
      }),
    }),
    TagsModule,
    MetaoptionsModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
