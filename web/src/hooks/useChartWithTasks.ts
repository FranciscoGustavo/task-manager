import { useState, useEffect } from 'react';
import { getToChart } from '../api/tasks';

const useChartWithTasks: UseChartWithTasksHook = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getToChart()
      .then((res) => setData(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { data, isLoading, error };
};

export default useChartWithTasks;
