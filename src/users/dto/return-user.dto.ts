import { User } from '../user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ReturnUserDto {
  @ApiProperty({
    description: 'Retorna um obejta com as informações do usuário',
    type: Object,
  })
  user: User;

  @ApiProperty()
  message: string;
}
