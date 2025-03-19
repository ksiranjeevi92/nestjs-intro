import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { HashingProvider } from 'src/auth/providers/hashing.provider';

@Injectable()
export class CreateUserProvider {
  constructor(
    /**
     * Repository
     */
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    /**
     * Hasing provider
     */
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
  ) {}
  public async createUser(createuserDto: CreateUserDto) {
    let existingUser;
    try {
      //Check is user is already exist with the same Email
      existingUser = await this.usersRepository.findOne({
        where: {
          email: createuserDto.email,
        },
      });
    } catch (exception) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        { description: 'Error connecting to database' },
      );
    }
    //Handle the exception is user already exist
    if (existingUser) {
      throw new BadRequestException(
        'The user already exists, please check your email',
      );
    }

    //Create a new user
    let newUser = this.usersRepository.create({
      ...createuserDto,
      password: await this.hashingProvider.hashPassword(createuserDto.password),
    });
    newUser = await this.usersRepository.save(newUser);

    return newUser;
  }
}
