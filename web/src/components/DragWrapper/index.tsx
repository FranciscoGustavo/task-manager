import React, { useRef, FC } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import TaskCard from '../TaskCard';

type DragWrapperProps = {
  item: any;
  index: number | string;
  tag?: number | string;
  onOpenTask: (item: object) => void;
  moveItem: any;
};

const DragWrapper: FC<DragWrapperProps> = ({
  item,
  index,
  moveItem,
  onOpenTask,
}) => {
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
    <div ref={ref}>
      <TaskCard task={item} onOpenTask={onOpenTask} />
    </div>
  );
};

export default DragWrapper;
