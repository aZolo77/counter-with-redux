import { STORE_RESULT, DELETE_RESULT } from './actionTypes';

// * Action Creators
const saveResult = result => {
  return {
    type: STORE_RESULT,
    payload: { result }
  };
};

// * async code performs with redux-thunk lib
export const storeResult = res => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // * possibility of getting old state data: getState()
      // const oldCounter = getState().ctr;
      // console.log(oldCounter);
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    payload: { id }
  };
};

export const resultActions = {
  storeResult,
  deleteResult
};
