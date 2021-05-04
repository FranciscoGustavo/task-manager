import { useState, useEffect } from 'react';
import { getTasks, getTask } from '../api/tasks';

export const useTasks = () => {
  const [tasks, setTasks] = useState(false);
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
  return {};
};

type Task = {
  id: number | string;
  title: string;
  description: string;
  timer: string;
  tag: string;
  createdAt?: string;
  updatedAt?: string;
};
type UseDropWrapper<T> = (data: Array<T>) => any;
const useDropWrapper: UseDropWrapper<Task> = (data) => {
  const [items, setItems] = useState(data);

  const onDrop = (item: any, monitor: any, tag: any) => {
    setItems((prevState) => {
      const newItems = prevState
        .filter((task) => task.id !== item.id)
        .concat({ ...item, tag });
      return [...newItems];
    });
  };

  const moveItem = (dragIndex: any, hoverIndex: any) => {
    const item = items[dragIndex];
    setItems((prevState) => {
      const newItems = prevState.filter((task, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  return [onDrop, moveItem];
};
