type StateSchema = {
  tasks: Tasks;
  task: Task | false;
  countdown: Task | false;
};

type TypeAction = 'ADD_COUNTDOWN' | 'REMOVE_COUNTDOWN';
type PayloadAction = Task | false;

type ActionSchema = {
  type: TypeAction;
  payload: PayloadAction;
};

type StateContextSchema = {
  state: StateSchema;
  dispatch: Dispatch<ActionSchema>;
};

type AppReducer = (state: StateSchema, action: ActionSchema) => StateSchema;
