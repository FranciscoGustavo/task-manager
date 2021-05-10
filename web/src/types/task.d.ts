type Task = {
  id?: string | number;
  title: string;
  description: string;
  timer: string;
  tag: string;
};

type Tasks = Array<Task>;

type FiltersTask = {
  startDate: string;
  endDate: string;
  timer: string;
  order: string;
};
