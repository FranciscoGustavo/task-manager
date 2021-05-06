import { instance } from './';

export type Task = {
  id?: string | number;
  title: string;
  description: string;
  timer: string;
  tag: string;
};

type GetTasks = () => Promise<Array<Task>>;
export const getTasks: GetTasks = async () => {
  const { data } = await instance.get('/tasks');
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
      tag: '',
    };
  }
  const { data } = await instance.get(`/tasks/${uid}`);
  return data.body;
};

type SaveTask = (task: Task) => void;
export const saveTask: SaveTask = (task) => {
  if (task.id) {
    updateTask(task.id, task);
  } else {
    createTask(task);
  }
};

type UpdateTask = (id: number | string, task: Task) => Promise<void>;
const updateTask: UpdateTask = async (id, task) => {
  const res = await instance.patch(`/tasks/${id}`, task);
  console.log(res);
  return res.data;
};

type CreateTask = (task: Task) => Promise<void>;
const createTask: CreateTask = async (task: Task) => {
  const res = await instance.post('/tasks', task);
  console.log(res);
  return res.data;
};
