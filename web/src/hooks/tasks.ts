import { saveTask } from '../api/tasks';

export { default as useTasks } from './useTasks';

export const useTask = async () => {
  const save = (task: any) => {
    saveTask(task);
  };

  return [save];
};
