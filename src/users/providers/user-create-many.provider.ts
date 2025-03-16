import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../user.entity';
import { DataSource } from 'typeorm';
import { CreateManyUsersDto } from '../dtos/create-many-users.dto';

@Injectable()
export class UserCreateManyProvider {
  constructor(
    /**
     * Inject the datasource
     */
    private dataSource: DataSource,
  ) {}

  public async creteMany(createManyUsersDto: CreateManyUsersDto) {
    let newUsers: User[] = [];
    //Create Query Runner Instance
    const queryRunner = this.dataSource.createQueryRunner();
    //Connect query runner to datasource
    await queryRunner.connect();
    //Start transaction
    await queryRunner.startTransaction();
    //If sucessful commit
    try {
      for (let user of createManyUsersDto.users) {
        let newUser = queryRunner.manager.create(User, user);
        let results = await queryRunner.manager.save(newUser);
        newUsers.push(results);
      }
      await queryRunner.commitTransaction();
    } catch (error) {
      //If transaction unsucessful rollback
      await queryRunner.rollbackTransaction();
    } finally {
      //Release connection
      await queryRunner.release();
    }
  }
}
