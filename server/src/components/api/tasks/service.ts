export interface TasksServiceSchema {
  findAll: () => void;
  create: () => void;
  findOne: (uid: string) => void;
  update: (uid: string) => void;
  destroy: (uid: string) => void;
}

export class TasksService implements TasksServiceSchema {
  async findAll() {
    return [];
  }

  async create() {
    return {};
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
