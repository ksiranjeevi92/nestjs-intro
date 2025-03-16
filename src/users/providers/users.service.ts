import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ConfigService, ConfigType } from '@nestjs/config';
import profileConfig from '../config/profile.config';

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
  ) {}

  public async createUser(createuserDto: CreateUserDto) {
    //Check is user is already exist with the same Email
    const exisitngUser = await this.usersRepository.findOne({
      where: {
        email: createuserDto.email,
      },
    });
    //Handle the exception is user already exist

    //Create a new user
    let newUser = this.usersRepository.create(createuserDto);
    newUser = await this.usersRepository.save(newUser);

    return newUser;
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
}
