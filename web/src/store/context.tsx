import { createContext, useContext, useReducer, FC, ReactNode } from 'react';
import appReducer from './reducer';

const initialState: StateSchema = {
  tasks: [],
  task: false,
  countdown: false,
};

const initialContext: StateContextSchema = {
  state: initialState,
  dispatch: () => {},
};

const AppStateContext = createContext<StateContextSchema>(initialContext);

type AppStateProviderProps = {
  children: ReactNode;
};
export const AppStateProvider: FC<AppStateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () =>
  useContext<StateContextSchema>(AppStateContext);
