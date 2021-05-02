import { Application } from 'express';
import { WebRouter } from './router';
import { WebController } from './controller';

const controller = new WebController();
const router = new WebRouter(controller);

export class WebComponent {
  constructor(app: Application) {
    app.use(router.getRouter());
  }
}
