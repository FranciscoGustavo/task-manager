type Task = {
  id?: string | number;
  title: string;
  description: string;
  timer: string | number;
  tag: string;
  started?: string | number;
  finished?: string | number;
  createdAt?: string;
  updatedAt?: number;
};

type Tasks = Array<Task>;

type FiltersTask = {
  startDate: string;
  endDate: string;
  timer: string;
  order: string;
};
