export const ADD_COUNTDOWN = 'ADD_COUNTDOWN';

export const addCountdown = (payload: Task) => ({
  type: ADD_COUNTDOWN,
  payload,
});
