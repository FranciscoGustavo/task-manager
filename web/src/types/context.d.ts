type StateSchema = {
  tasks: Tasks;
  task: Task | false;
  countdown: Task | false;
};

type TypeAction = 'ADD_COUNTDOWN';
type PayloadAction = Task;

type ActionSchema = {
  type: typeAction;
  payload: PayloadAction;
};

type StateContextSchema = {
  state: StateSchema;
  dispatch: Dispatch<ActionSchema>;
};

type AppReducer = (state: StateSchema, action: ActionSchema) => StateSchema;
