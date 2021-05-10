import { useState, useEffect } from 'react';
import { getTasks } from '../api/tasks';

type GetDateToPassAtField = () => string;
const getDateToPassAtField: GetDateToPassAtField = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month =
    today.getMonth() < 9 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
  const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const todayStr = `${year}-${month}-${day}`;
  return todayStr;
};

const useTasks: UseTasksHook = () => {
  getDateToPassAtField();
  const [filters, setFilters] = useState<FiltersTask>({
    startDate: '2021-05-01',
    endDate: getDateToPassAtField(),
    timer: 'all',
    order: 'ASC',
  });
  const [data, setData] = useState<Array<Task>>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const reloadTasks = (newFilters?: FiltersTask) => {
    setData([]);
    setLoading(true);
    if (newFilters) {
      setFilters(newFilters);
      return getTasks(newFilters)
        .then((res) => setData(res))
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }

    return getTasks(filters)
      .then((res) => setData(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getTasks(filters)
      .then((res) => setData(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { data, isLoading, error, filters, reloadTasks };
};

export default useTasks;
