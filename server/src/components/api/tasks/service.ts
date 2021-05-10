import { Op } from 'sequelize';

export type UpdateTaskProps = {
  title?: string;
  description?: string;
  timer?: string;
  tag?: string;
};

export type CreateTaskProps = {
  title: string;
  description: string;
  timer: string;
  tag: string;
};

export type QueryFilter = {
  startDate?: string;
  endDate?: string;
  timer?: string;
  order?: string;
};

export interface TasksServiceSchema {
  findAll: (queryFilter: QueryFilter) => void;
  create: (data: CreateTaskProps) => void;
  findOne: (uid: string) => void;
  update: (uid: string, data: UpdateTaskProps) => void;
  destroy: (uid: string) => void;
}

export class TasksService implements TasksServiceSchema {
  constructor(private _model: any) {}

  async findAll({ startDate, endDate, timer, order }: QueryFilter) {
    const todayEndDate = Date.now();
    const todayStartDate = todayEndDate - 5 * 24 * 60 * 60000;

    let emptyStartDate = new Date(todayStartDate).toISOString();
    let emptyEndDate = new Date(todayEndDate).toISOString();
    let emptyOrder = 'DESC';
    let emptyTimerStart = 0;
    let emptyTimerEnd = 120;

    if (startDate && endDate && order) {
      emptyStartDate = new Date(startDate).toISOString();
      emptyEndDate = new Date(endDate).toISOString();
      emptyOrder = order;
    }

    if (timer && timer === '30') {
      emptyTimerStart = 0;
      emptyTimerEnd = 30;
    } else if (timer && timer === '45') {
      emptyTimerStart = 30;
      emptyTimerEnd = 45;
    } else if (timer && timer === '60') {
      emptyTimerStart = 45;
      emptyTimerEnd = 60;
    }

    return await this._model.findAll({
      where: {
        createdAt: {
          [Op.between]: [emptyStartDate, emptyEndDate],
        },
        timer: {
          [Op.between]: [emptyTimerStart, emptyTimerEnd],
        },
      },
      order: [['id', emptyOrder]],
    });
  }

  async create({ title, description, timer, tag }: CreateTaskProps) {
    if (!title || !description || !timer || !tag) {
      throw new Error('To create a task is necesary all fields');
    }

    const createdTask = await this._model.create({
      title,
      description,
      timer,
      tag,
    });
    return createdTask;
  }

  async findOne(uid: string) {
    const findedTask = await this._model.findByPk(uid);
    return findedTask;
  }

  async update(
    uid: string,
    { title, description, timer, tag }: UpdateTaskProps
  ) {
    await this._model.update(
      {
        title,
        description,
        timer,
        tag,
      },
      {
        where: {
          id: uid,
        },
      }
    );
  }

  async destroy(uid: string) {
    const findedTask = await this._model.findByPk(uid);
    await findedTask.destroy();
    return { uid };
  }
}
