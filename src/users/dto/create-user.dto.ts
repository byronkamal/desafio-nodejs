import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  // email
  @ApiProperty()
  @IsNotEmpty({
    message: 'Informe um email',
  })
  @IsEmail(
    {},
    {
      message: 'Informe um email válido',
    },
  )
  @MaxLength(200, {
    message: 'O email deve ter menos de 200 caracteres',
  })
  email: string;

  // name
  @ApiProperty()
  @IsNotEmpty({
    message: 'Informe o nome do usuário',
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres',
  })
  name: string;

  // cpf
  @ApiProperty({
    description: 'CPF deve conter 11 digitos',
    type: String,
  })
  @IsNotEmpty({
    message: 'Informe seu CPF',
  })
  @MinLength(11, {
    message: 'O CPF deve conter 11 digitos.',
  })
  @MaxLength(11, {
    message: 'O CPF deve conter 11 digitos.',
  })
  cpf: string;

  // password
  @ApiProperty({
    description: 'minimo 6 caracteres e maximo de 32 caracteres',
    type: String,
  })
  @IsNotEmpty({
    message: 'Informe uma senha',
  })
  @MinLength(6, {
    message: 'A senha deve ter no mínimo 6 caracteres',
  })
  password: string;

  // password confirmation
  @ApiProperty({
    description: 'minimo 6 caracteres e maximo de 32 caracteres',
    type: String,
  })
  @IsNotEmpty({
    message: 'Informe a confirmação de senha',
  })
  @MinLength(6, {
    message: 'A confirmação de senha deve ter no mínimo 6 caracteres',
  })
  passwordConfirmation: string;
}
