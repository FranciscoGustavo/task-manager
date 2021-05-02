export type CreateTaskProps = {
  title: string;
  description: string;
  estimatedTime: string;
};

export interface TasksServiceSchema {
  findAll: () => void;
  create: (data: CreateTaskProps) => void;
  findOne: (uid: string) => void;
  update: (uid: string) => void;
  destroy: (uid: string) => void;
}

export class TasksService implements TasksServiceSchema {
  constructor(private _model: any) {}

  async findAll() {
    return await this._model.findAll();
  }

  async create({ title, description, estimatedTime }: CreateTaskProps) {
    if (!title || !description || !estimatedTime) {
      throw new Error('To create a task is necesary all fields');
    }

    const createdTask = await this._model.create({
      title,
      description,
      estimatedTime,
    });
    return createdTask;
  }

  async findOne(uid: string) {
    return { uid };
  }

  async update(uid: string) {
    return { uid };
  }

  async destroy(uid: string) {
    return { uid };
  }
}
