import { actionTypes } from '../actions/actions';

const initialState = {
  results: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: [...state.results, { id: new Date(), value: payload.result }]
      };
    case actionTypes.DELETE_RESULT:
      const updatedArr = state.results.filter(el => el.id !== payload.id);
      return {
        ...state,
        results: updatedArr
      };
    default:
      return state;
  }
};

export default reducer;
