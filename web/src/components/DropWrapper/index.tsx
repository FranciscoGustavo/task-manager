import React, { FC, ReactElement } from 'react';
import { useDrop } from 'react-dnd';

const ITEMS = [
  {
    name: 'to do',
    tasks: [{}, {}, {}],
  },
  {
    name: 'in progress',
    tasks: [{}, {}, {}],
  },
  {
    name: 'completed',
    tasks: [{}, {}, {}],
  },
];

type DropWrapperProps = {
  onDrop: (item: any, monitor: any, status: any) => void;
  name: string;
  children: ReactElement;
};

const DropWrapper: FC<DropWrapperProps> = ({ children, onDrop, name }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'ITEM',
    canDrop: (item: any) => {
      const itemIndex = ITEMS.findIndex(({ name }) => name === item.name);
      const statusIndex = ITEMS.findIndex(({ name }) => name === item.name);
      return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
    },
    drop: (item, monitor) => {
      onDrop(item, monitor, name);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return <div ref={drop}>{React.cloneElement(children, { isOver })}</div>;
};

export default DropWrapper;
