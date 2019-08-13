import { INCREMENT, DECREMENT, ADD, SUBTRACT } from './actionTypes';

// * Action Creators
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = value => {
  return {
    type: ADD,
    payload: { value }
  };
};

export const subtract = value => {
  return {
    type: SUBTRACT,
    payload: { value }
  };
};

export const counterActions = {
  increment,
  decrement,
  add,
  subtract
};
