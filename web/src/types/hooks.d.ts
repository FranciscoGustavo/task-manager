/**
 * useTasks
 */
type UseTasksHookReturnedProps = {
  data: Array<Task>;
  isLoading: boolean;
  error: boolean;
  filters: FiltersTask;
  reloadTasks: (filters?: FiltersTask) => void;
};
type UseTasksHook = () => UseTasksHookReturnedProps;

/**
 * useTask
 */
type UseTaskHookReturnedProps = {
  data: Task | boolean;
  isLoading: boolean;
  error: boolean;
  save: (task: Task) => void;
  remove: (id?: string | number) => Promise<void>;
};
type UseTaskHook = (id?: string | number | 'new') => UseTaskHookReturnedProps;
