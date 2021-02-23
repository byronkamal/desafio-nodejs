import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Get,
  Param,
  Patch,
  ForbiddenException,
} from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ReturnUserDto } from './dto/return-user.dto';
import { UserRole } from './user-roles.enum';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiOperation({ description: 'Rota para criação de usuário' })
  @ApiBody({
    description: 'Rota para criação de usuário',
    type: CreateUserDto,
  })
  async createUser(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<ReturnUserDto> {
    const user = await this.usersService.createUser(createUserDto);
    return {
      user,
      message: 'Usuário criado com sucesso!',
    };
  }

  @Get('')
  @ApiOperation({
    description: 'Listar todos os usuários',
  })
  async findAllUsers(): Promise<any> {
    const users = await this.usersService.findAllUsers();
    return {
      users,
      message: 'Usuário encontrado',
    };
  }

  @Get(':id')
  @ApiOperation({
    description: 'Rota para buscar um usuário especifico por ID',
    parameters: [{ name: 'id', in: 'path' }],
  })
  async findUserById(@Param('id') id): Promise<ReturnUserDto> {
    const user = await this.usersService.findUserById(id);
    return {
      user,
      message: 'Usuário encontrado',
    };
  }

  @Patch(':id')
  @ApiOperation({
    description: 'Atualizar dados de um usuário',
    parameters: [{ name: 'id', in: 'path' }],
  })
  @ApiBody({
    description: 'Atualizar dados de um usuário',
    type: UpdateUserDto,
  })
  async updateUser(
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
    @GetUser() user: User,
    @Param('id') id: string,
  ) {
    return this.usersService.updateUser(updateUserDto, id);
  }
}
