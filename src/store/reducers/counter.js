import { actionTypes } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + payload.value });
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - payload.value });
    default:
      return state;
  }
};

export default reducer;
