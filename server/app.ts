import express, { Application } from 'express';
import morgan from 'morgan';

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
  }

  config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan('dev'));
    this.app.get('/' , (req, res) => {
      res.send('Hello World');
    })
  }
}