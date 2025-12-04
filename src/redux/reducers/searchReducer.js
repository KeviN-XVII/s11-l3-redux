import { GET_JOBS, SET_LOADING, SET_ERROR } from "../actions";

const initialState = {
  jobs: [],
};

const searchReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...currentState,
        jobs: action.payload.data,
        loading: true,
        error: null,
      };
    case SET_LOADING:
      return {
        ...currentState,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...currentState,
        error: action.payload,
      };

    default:
      return currentState;
  }
};
export default searchReducer;
