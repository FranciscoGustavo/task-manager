import { Request, Response, NextFunction } from 'express';
import {
  TasksServiceSchema,
  CreateTaskProps,
  UpdateTaskProps,
} from './service';
import { success } from '../../../utils/responses/success';

export interface TasksControllerSchema {
  findAll: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  findOne: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  create: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  update: (
    req: Request<{ uid: string }, {}, UpdateTaskProps>,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  destroy: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  findToChart: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
}

export class TasksController implements TasksControllerSchema {
  constructor(private _service: TasksServiceSchema) {
    this.findAll = this.findAll.bind(this);
    this.create = this.create.bind(this);
    this.findOne = this.findOne.bind(this);
    this.update = this.update.bind(this);
    this.destroy = this.destroy.bind(this);
    this.findToChart = this.findToChart.bind(this);
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    const { query } = req;
    const { startDate, endDate, timer, order } = query as any;

    try {
      const listedTasks = await this._service.findAll({
        startDate,
        endDate,
        timer,
        order,
      });
      success({ res, body: listedTasks, message: 'listed tasks' });
    } catch (error) {
      next(error);
    }
  }

  async create(
    req: Request<{}, {}, CreateTaskProps>,
    res: Response,
    next: NextFunction
  ) {
    const { title, description, timer, tag } = req.body;
    try {
      const createdTask = await this._service.create({
        title,
        description,
        timer,
        tag,
      });
      success({
        res,
        body: createdTask,
        message: 'created task',
        status: 201,
      });
    } catch (error) {
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

  async update(
    req: Request<{ uid: string }, {}, UpdateTaskProps>,
    res: Response,
    next: NextFunction
  ) {
    const { uid } = req.params;
    const { title, description, timer, tag } = req.body;
    try {
      await this._service.update(uid, {
        title,
        description,
        timer,
        tag,
      });
      success({ res, message: 'updated task' });
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

  async findToChart(req: Request, res: Response, next: NextFunction) {
    try {
      const listedTasks = await this._service.findToChart();
      success({ res, body: listedTasks });
    } catch (error) {
      next(error);
    }
  }
}
