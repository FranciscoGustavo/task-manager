/**
 * useTasks
 */
type UseTasksHookReturnedProps = {
  data: Array<Task>;
  isLoading: boolean;
  error: boolean;
};
type UseTasksHook = () => UseTasksHookReturnedProps;

/**
 * useTask
 */
type UseTaskHookReturnedProps = {
  data: Task | boolean;
  isLoading: boolean;
  error: boolean;
  save: () => void;
};
type UseTaskHook = (id: string | number) => UseTaskHookReturnedProps;
