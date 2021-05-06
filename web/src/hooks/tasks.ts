import { useState, useEffect } from 'react';
import { Task, getTasks, saveTask } from '../api/tasks';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Array<Task> | boolean>(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTasks()
      .then((res) => setTasks(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  getTasks();
  return [tasks, loading, error];
};

export const useTask = async () => {
  const save = (task: any) => {
    saveTask(task);
  };

  return [save];
};
