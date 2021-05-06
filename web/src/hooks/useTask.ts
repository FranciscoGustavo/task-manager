import { useState, useEffect } from 'react';
import { getTask, saveTask } from '../api/tasks';

export const useTask: UseTaskHook = (id) => {
  const [data, setData] = useState<Task | boolean>(false);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const save = () => {};

  useEffect(() => {
    getTask(id)
      .then((res) => setData(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { data, isLoading, error, save };
};

export default useTask;
