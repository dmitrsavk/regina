import { combineReducers } from "redux";

import {
  indexReducer,
  initialState as indexInitialState
} from "./store/index/reducer";

import {
  articlesReducer,
  initialState as articlesInitialState
} from "./store/articles/reducer";

export const rootInitialState = {
  index: indexInitialState,
  articles: articlesInitialState
};

export default combineReducers({
  index: indexReducer,
  articles: articlesReducer
});
