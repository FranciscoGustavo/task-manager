import React, { useRef, FC } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles';

const TaskCard: FC<any> = ({ item, index, moveItem, tag, onOpenTask }) => {
  const classes = useStyles();
  const ref: any = useRef(null);
  const [, drop] = useDrop({
    accept: 'ITEM',
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition: any = monitor.getClientOffset();
      const hoverClientY = mousePosition.y - hoveredRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
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
    <Card ref={ref}>
      <CardActionArea onClick={() => onOpenTask(item)}>
        <CardContent>
          <Typography variant="h5">{item.name + item.id}</Typography>
          <Typography variant="body2">{item.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TaskCard;
