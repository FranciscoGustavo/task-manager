import { Sequelize, Options } from 'sequelize';
import { db as DBConfig } from '../config';

let sequelize: Sequelize | null = null;

type SetupDatabase = (config: Options) => Sequelize;

export const setupDatabase: SetupDatabase = (config) => {
  if (!sequelize) {
    sequelize = new Sequelize(config);
  }
  return sequelize;
};

const connectDatabase = async (force: boolean = false) => {
  const sequelize = setupDatabase(DBConfig);
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default connectDatabase;
