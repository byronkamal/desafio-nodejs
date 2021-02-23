import { ApiProperty } from '@nestjs/swagger';

export class RecoveryPasswordEmailDto {
  @ApiProperty()
  email: string;
}

export class RecoveryPasswordCpfDto {
  @ApiProperty()
  cpf: string;
}
