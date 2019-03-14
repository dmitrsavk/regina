import { actionTypes } from "./actions";

export const initialState = {
  articles: [],
  status: "INITIAL"
};

export const indexReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_ARTICLES_SUCCESS:
      return { ...state, articles: payload, status: "SUCCESS" };
    case actionTypes.GET_ARTICLES_ERROR:
      return { ...state, status: "ERROR" };
    default:
      return state;
  }
};
