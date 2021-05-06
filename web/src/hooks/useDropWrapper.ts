import { useState } from 'react';

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

  return [onDrop, moveItem, setItems, items];
};

export default useDropWrapper;
