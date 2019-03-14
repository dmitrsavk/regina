import { actionTypes } from "./actions";

export const initialState = {
  articles: {},
  status: "INITIAL"
};

export const articlesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_ARTICLE_SUCCESS:
      const { alias } = payload;

      return {
        ...state,
        articles: { ...state.articles, [alias]: payload }
      };
    case actionTypes.GET_ARTICLE_ERROR:
      return { ...state, status: "ERROR" };
    default:
      return state;
  }
};
