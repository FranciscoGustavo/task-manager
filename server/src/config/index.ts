import { Options } from 'sequelize';

export const db: Options = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'test',
  password: 'test',
  database: 'test',
};

export default {
  db,
};
