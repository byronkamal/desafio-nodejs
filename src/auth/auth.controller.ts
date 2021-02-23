import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Get,
  UseGuards,
  Patch,
  Param,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiProperty } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CredentialsDto } from './dto/credentials.dto';
import { User } from '../users/user.entity';
import { ChangePasswordDto } from './dto/change-password.dto';
import {
  RecoveryPasswordEmailDto,
  RecoveryPasswordCpfDto,
} from './dto/recovery-password.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/recovery-password-email')
  @ApiOperation({
    description: 'Rota recuperação de senha utilizando email',
  })
  @ApiBody({
    description: 'Rota recuperação de senha utilizando email',
    type: RecoveryPasswordEmailDto,
  })
  async recoverPasswordWithEmail(
    @Body('email') email: string,
  ): Promise<{ message: string }> {
    const recoveryToken = await this.authService.recoverPasswordWithEmail(
      email,
    );

    return {
      message: `Seu token de recuperação de senha: ${recoveryToken}`,
    };
  }

  @Post('/recovery-password-cpf')
  @ApiOperation({
    description: 'Rota recuperação de senha',
  })
  @ApiBody({
    description: 'Rota recuperação de senha utilizando CPF',
    type: RecoveryPasswordCpfDto,
  })
  async recoveryPasswordWithCPF(
    @Body('cpf') cpf: string,
  ): Promise<{ message: string }> {
    const recoveryToken = await this.authService.recoverPasswordWithCPF(cpf);

    return {
      message: `Seu token de recuperação de senha: ${recoveryToken}`,
    };
  }

  @Patch('/reset-password/:token')
  @ApiOperation({
    description: 'Rota para reset de senha',
    parameters: [{ name: 'token', in: 'path' }],
  })
  @ApiBody({
    description: 'Rota para reset de senha',
    type: ChangePasswordDto,
  })
  async resetPassword(
    @Param('token') token: string,
    @Body(ValidationPipe) changePasswordDto: ChangePasswordDto,
  ): Promise<{ message: string }> {
    await this.authService.resetPassword(token, changePasswordDto);

    return {
      message: 'Senha alterada com sucesso!',
    };
  }
}
