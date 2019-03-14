import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { spawn, takeLatest, call, put } from "redux-saga/effects";

import { actions, actionTypes } from "./actions";

const PORT = process.env.NODE_ENV === "dev" ? 8080 : 3000;

const fetchArticles = () => {
  return fetch(`http://regisha.ru:3001/api/popular`)
    .then(res => res.json())
    .catch(err => console.log(err));
};

export function* getArticles() {
  try {
    const data = yield call(fetchArticles);
    yield put(actions.getArticlesSuccess(data));
  } catch (error) {
    yield put(actions.getArticlesError(error));
  }
}

function* handleGetArticles() {
  yield takeLatest(actionTypes.GET_ARTICLES, getArticles);
}

export default function* indexSaga() {
  yield spawn(handleGetArticles);
}
