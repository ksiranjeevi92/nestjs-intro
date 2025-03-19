import {
  Injectable,
  forwardRef,
  Inject,
  RequestTimeoutException,
  BadRequestException,
} from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { DataSource, Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ConfigService, ConfigType } from '@nestjs/config';
import profileConfig from '../config/profile.config';
import { UserCreateManyProvider } from './user-create-many.provider';
import { CreateManyUsersDto } from '../dtos/create-many-users.dto';
import { CreateUserProvider } from './create-user.provider';
import { FindOneUserByEmail } from './find-one-user-by-email';

/**
 *Class to connect users table and perform operation
 */
@Injectable()
export class UsersService {
  /**
   *
   * @param authService
   * Constructor
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    /**
     * Injecting usersRepository
     */
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    private configService: ConfigService,

    // Injecting ConfigService
    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,

    /**
     * Inject datasource
     */
    private readonly dataSource: DataSource,

    private readonly userCreateManyProvider: UserCreateManyProvider,

    private readonly createUserProvider: CreateUserProvider,

    /**
     * Inject Find one user by email
     */
    private readonly findOneUserByEmailProvider: FindOneUserByEmail,
  ) {}

  public async createUser(createuserDto: CreateUserDto) {
    this.createUserProvider.createUser(createuserDto);
  }

  /**
   *
   * @param getUsersParamDto
   * @param limit
   * @param page
   * @returns
   * method to return all users
   */
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const environment = this.configService.get<string>('S3_BUCKET');

    console.log(environment);

    return [];
  }

  /**
   *
   * @param id
   * @returns
   * method to return user by id
   */
  public async findById(id: number) {
    return await this.usersRepository.findOneBy({
      id,
    });
  }

  public async createMany(createManyUsersDto: CreateManyUsersDto) {
    this.userCreateManyProvider.creteMany(createManyUsersDto);
  }

  public async findOneByEmail(email: string) {
    try {
      return this.findOneUserByEmailProvider.findOneByEmail(email);
    } catch (err) {}
  }
}
