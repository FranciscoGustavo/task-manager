export interface TasksServiceSchema {
  findAll: () => void;
  findOne: (uid: string) => void;
}

export class TasksService implements TasksServiceSchema {
  async findAll() {
    return [];
  }

  async findOne(uid: string) {
    return { uid };
  }
}
