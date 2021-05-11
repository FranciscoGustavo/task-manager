import { useState, useEffect } from 'react';
import { getTasks } from '../api/tasks';

/**
 * Create a date in format YYYY-MM-DD
 * 
 */
type GetDateToPassAtField = (date: Date) => string;
const getDateToPassAtField: GetDateToPassAtField = (date) => {
  const year = date.getFullYear();
  const month =
    date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const dateStr = `${year}-${month}-${day}`;
  return dateStr;
};

/**
 * find all task and return 3 states isLoadin, error and the data
 * also return the filters and one functions to find new data updated
 * 
 */
const useTasks: UseTasksHook = () => {
  const todayEndDate = Date.now();
  const todayStartDate = todayEndDate - 5 * 24 * 60 * 60000;

  const [filters, setFilters] = useState<FiltersTask>({
    startDate: getDateToPassAtField(new Date(todayStartDate)),
    endDate: getDateToPassAtField(new Date(todayEndDate)),
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
