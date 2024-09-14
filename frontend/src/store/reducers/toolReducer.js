import { GET_TOOLS, TOOLS_ERROR } from '../actions/types';

const initialState = {
  tools: [],
  error: null,
};

export default function toolReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOOLS:
      return {
        ...state,
        tools: action.payload,
        error: null,
      };
    case TOOLS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
