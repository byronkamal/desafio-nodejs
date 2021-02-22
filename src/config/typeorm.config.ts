import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
