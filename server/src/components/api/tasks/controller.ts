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
    try {
      const createdTask = await this._service.create();
      success({ res, body: createdTask, message: 'created task', status: 201 });
    } catch(error) {
      next(error);
    }
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

  async update(req: Request, res: Response, next: NextFunction) {
    const { uid } = req.params;
    try {
      const updatedTask = await this._service.update(uid);
      success({ res, body: updatedTask, message: 'updated task' });
    } catch (error) {
      next(error);
    }
  }

  async destroy(req: Request, res: Response, next: NextFunction) {
    const { uid } = req.params;
    try {
      await this._service.destroy(uid);
      success({ res });
    } catch (error) {
      next(error);
    }
  }
}
