import { ADD_COUNTDOWN } from './actions';

const appReducer: AppReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COUNTDOWN: {
      const newState = { ...state, countdown: payload };
      return newState;
    }
    default:
      return state;
  }
};

export default appReducer;
