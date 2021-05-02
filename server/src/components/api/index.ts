import { Application } from 'express';
import { TASKS_ROUTER } from './tasks';

export class ApiComponent {
  constructor(app: Application) {
    app.use('/api/tasks', TASKS_ROUTER);
  }
}
