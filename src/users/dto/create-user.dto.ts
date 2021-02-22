import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  minLength,
} from 'class-validator';

export class CreateUserDto {
  // email
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
  @IsNotEmpty({
    message: 'Informe o nome do usuário',
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres',
  })
  name: string;

  // cpf
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
  @IsNotEmpty({
    message: 'Informe uma senha',
  })
  @MinLength(6, {
    message: 'A senha deve ter no mínimo 6 caracteres',
  })
  password: string;

  // password confirmation
  @IsNotEmpty({
    message: 'Informe a confirmação de senha',
  })
  @MinLength(6, {
    message: 'A confirmação de senha deve ter no mínimo 6 caracteres',
  })
  passwordConfirmation: string;
}
