import { setupDatabase } from '../lib/sequelize';
import { db as DBConfig } from '../config';
import './taks';

const sequelize = setupDatabase(DBConfig);

export const { Task } = sequelize.models;
