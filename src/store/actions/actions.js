// * Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const STORE_RESULT = 'STORE_RESULT';
const DELETE_RESULT = 'DELETE_RESULT';

export const actionTypes = {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT,
  STORE_RESULT,
  DELETE_RESULT
};

// * Action Creators
const increment = () => {
  return {
    type: INCREMENT
  };
};

const decrement = () => {
  return {
    type: DECREMENT
  };
};

const add = value => {
  return {
    type: ADD,
    payload: { value }
  };
};

const subtract = value => {
  return {
    type: SUBTRACT,
    payload: { value }
  };
};

const saveResult = result => {
  return {
    type: STORE_RESULT,
    payload: { result }
  };
};

// * async code performs with redux-thunk lib
const storeResult = res => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};

const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    payload: { id }
  };
};

export const actionCreators = {
  increment,
  decrement,
  add,
  subtract,
  storeResult,
  deleteResult
};
