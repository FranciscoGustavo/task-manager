import { instance } from './';

export const getTasks = async () => {
  const { data } = await instance.get('/tasks');
  return data.body;
};

type GetTask = (uid: number | string) => Promise<any>;
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
