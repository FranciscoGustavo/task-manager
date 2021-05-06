import { useState, useEffect } from 'react';
import { getTasks } from '../api/tasks';

const useTasks: UseTasksHook = () => {
  const [data, setData] = useState<Array<Task>>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTasks()
      .then((res) => setData(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { data, isLoading, error };
};

export default useTasks;
