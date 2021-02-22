import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ReturnUserDto } from './dto/return-user.dto';
import 'dotenv/config';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<ReturnUserDto> {
    console.log('aqui', process.env.DB_HOST);

    const user = await this.usersService.createUser(createUserDto);
    return {
      user,
      message: 'Usuário criado com sucesso!',
    };
  }
}
