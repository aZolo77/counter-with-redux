import { actionTypes } from '../actions/actions';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + payload.value
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - payload.value
      };
    default:
      return state;
  }
};

export default reducer;
