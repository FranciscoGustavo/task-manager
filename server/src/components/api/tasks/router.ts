import { Router } from 'express';
import { TasksControllerSchema } from './controller';

export class TasksRouter {
  private router: Router;

  constructor(private _controller: TasksControllerSchema) {
    this.router = Router();
    this.router.get('/', this._controller.findAll);
    this.router.post('/', this._controller.create);
    this.router.get('/chart', this._controller.findToChart);
    this.router.get('/:uid', this._controller.findOne);
    this.router.patch('/:uid', this._controller.update);
    this.router.delete('/:uid', this._controller.destroy);
  }

  getRouter() {
    return this.router;
  }
}
