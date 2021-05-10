type StateSchema = {
  tasks: Tasks;
  task: Task | false;
};

type ActionSchema<T> = {
  type: string;
  payload: T;
};

type StateContextSchema = {
  state: StateSchema;
  dispatch: Dispatch<ActionSchema>;
};

type AppReducer = (state: StateSchema, action: ActionSchema) => StateSchema;
