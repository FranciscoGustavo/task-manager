export const ADD_COUNTDOWN = 'ADD_COUNTDOWN';
export const addCountdown = (payload: Task) => ({
  type: ADD_COUNTDOWN,
  payload,
});

export const REMOVE_COUNTDOWN = 'REMOVE_COUNTDOWN';
export const removeCountdown = () => ({
  type: REMOVE_COUNTDOWN,
  payload: false,
});
