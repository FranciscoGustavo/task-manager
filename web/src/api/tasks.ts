import { instance } from './';

type GetTasks = (filters: FiltersTask) => Promise<Array<Task>>;
export const getTasks: GetTasks = async (filters) => {
  const filtersStr = JSON.stringify(filters)
    .replaceAll(':', '=')
    .replaceAll('"', '')
    .replaceAll('{', '')
    .replaceAll('}', '')
    .replaceAll(',', '&');
  const { data } = await instance.get(`/tasks?${filtersStr}`);
  return data.body;
};

type GetTask = (uid: number | string) => Promise<Task>;
export const getTask: GetTask = async (uid) => {
  if (uid === 'new') {
    return {
      id: null,
      title: '',
      description: '',
      timer: '',
      tag: 'to do',
    };
  }
  const { data } = await instance.get(`/tasks/${uid}`);
  return {
    ...data.body,
    timer: String(data.body.timer),
  };
};

type SaveTask = (task: Task) => Promise<Task>;
export const saveTask: SaveTask = async (task) => {
  const readyTask: Task = {
    ...task,
    timer: Number(task.timer),
  };

  if (readyTask.id) {
    return updateTask(readyTask.id, readyTask);
  } else {
    return createTask(readyTask);
  }
};

type UpdateTask = (id: number | string, task: Task) => Promise<Task>;
const updateTask: UpdateTask = async (id, task) => {
  await instance.patch(`/tasks/${id}`, task);
  return task;
};

type CreateTask = (task: Task) => Promise<Task>;
const createTask: CreateTask = async (task: Task) => {
  const res = await instance.post<{ body: Task }>('/tasks', task);
  return res.data.body;
};

type RemoveTask = (id: string | number) => Promise<void>;
export const removeTask: RemoveTask = async (id) => {
  await instance.delete<{ body: Task }>(`/tasks/${id}`);
  return;
};

type GetToChart = () => Promise<void>;
export const getToChart: GetToChart = async () => {
  const { data } = await instance.get('/tasks/chart');
  return data.body;
};
