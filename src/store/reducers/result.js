import { actionTypes } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

// Helper fn
const deleteResult = (state, id) => {
  const results = state.results.filter(el => el.id !== id);
  return updateObject(state, { results });
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.STORE_RESULT:
      const results = [
        ...state.results,
        { id: new Date(), value: payload.result }
      ];
      return updateObject(state, { results });
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, payload.id);
    default:
      return state;
  }
};

export default reducer;
