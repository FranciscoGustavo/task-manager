/**
 * useTasks
 */
type UseTasksHookReturnedProps = {
  data: Array<Task>;
  isLoading: boolean;
  error: boolean;
};
type UseTasksHook = () => UseTasksHookReturnedProps;
