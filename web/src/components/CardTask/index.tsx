import React, { useRef, FC } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { useStyles } from './styles';

const CardTask: FC<any> = ({ item, index, status }) => {
  const classes = useStyles();
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'ITEM',
    hover(item, monitor) {},
  });

  const [, drag] = useDrag({
    type: 'ITEM',
    item: { type: 'ITEM', ...item, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div ref={ref} className={classes.root}>
      Card 1
    </div>
  );
};

export default CardTask;
