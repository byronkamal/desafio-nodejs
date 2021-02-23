import { IsString, MinLength, MaxLength, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDto {
  // password
  @ApiProperty()
  @IsString({
    message: 'Informe uma senha válida.',
  })
  @MinLength(6, {
    message: 'A senha deve ter no mínimo 6 caracteres.',
  })
  @MaxLength(32, {
    message: 'A senha deve ter no máximo 32 caracteres.',
  })
  password: string;

  // passwordConfirmation
  @ApiProperty()
  @IsString({
    message: 'Informe uma senha válida.',
  })
  @MinLength(6, {
    message: 'A senha deve ter no mínimo 6 caracteres.',
  })
  @MaxLength(32, {
    message: 'A senha deve ter no máximo 32 caracteres.',
  })
  passwordConfirmation: string;
}
