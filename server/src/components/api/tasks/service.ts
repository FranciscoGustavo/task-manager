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

export interface TasksServiceSchema {
  findAll: () => void;
  create: (data: CreateTaskProps) => void;
  findOne: (uid: string) => void;
  update: (uid: string, data: UpdateTaskProps) => void;
  destroy: (uid: string) => void;
}

export class TasksService implements TasksServiceSchema {
  constructor(private _model: any) {}

  async findAll() {
    return await this._model.findAll();
  }

  async create({
    title, description, timer, tag,
  }: CreateTaskProps) {
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
    {
      title, description, timer, tag,
    }: UpdateTaskProps,
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
      },
    );
  }

  async destroy(uid: string) {
    return { uid };
  }
}
