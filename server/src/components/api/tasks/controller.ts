import { Request, Response, NextFunction } from 'express';
import { TasksServiceSchema } from './service';
import { success } from '../../../utils/responses/success';

export interface TasksControllerSchema {
  findAll: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  findOne: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  create: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  update: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  destroy: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

export class TasksController implements TasksControllerSchema {
  constructor(private _service: TasksServiceSchema) {
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const listedTasks = await this._service.findAll();
      success({ res, body: listedTasks, message: 'listed tasks' });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    res.send('Hello all tasks');
  }

  async findOne(req: Request, res: Response, next: NextFunction) {
    const { uid } = req.params;
    try {
      const findedTask = await this._service.findOne(uid);
      success({ res, body: findedTask, message: 'finded task' });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response) {
    res.send('Hello all tasks');
  }

  async destroy(req: Request, res: Response) {
    res.send('Hello all tasks');
  }
}
