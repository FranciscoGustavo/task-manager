import React, { FC, ReactElement } from 'react';
import { useDrop } from 'react-dnd';
import { TAGS } from '../../data';
import { useStyles } from './styles';

type DropWrapperProps = {
  onDrop: (item: any, monitor: any, status: any) => void;
  name: string;
  children: ReactElement;
};

const DropWrapper: FC<DropWrapperProps> = ({ children, onDrop, name }) => {
  const classes = useStyles();
  const [{ isOver }, drop] = useDrop({
    accept: 'ITEM',
    canDrop: (item: any) => {
      const itemIndex = TAGS.findIndex(({ name }) => name === item.name);
      const statusIndex = TAGS.findIndex(({ name }) => name === item.name);
      return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
    },
    drop: (item, monitor) => {
      onDrop(item, monitor, name);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={classes.root}>
      {React.cloneElement(children, { isOver })}
    </div>
  );
};

export default DropWrapper;
