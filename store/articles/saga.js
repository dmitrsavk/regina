import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { spawn, takeLatest, call, put } from "redux-saga/effects";

import { actions, actionTypes } from "./actions";

const PORT = process.env.NODE_ENV === "dev" ? 8080 : 3000;

const fetchArticle = alias => {
  return fetch(`http://regisha.ru:3001/api/article/${alias}`)
    .then(res => res.json())
    .catch(err => console.log(err));
};

export function* getArticle({ type, payload: { alias } }) {
  try {
    const data = yield call(fetchArticle, alias);
    yield put(actions.getArticleSuccess(data));
  } catch (error) {
    yield put(actions.getArticleError(error));
  }
}

function* handleGetArticle() {
  yield takeLatest(actionTypes.GET_ARTICLE, getArticle);
}

export default function* articlesSaga() {
  yield spawn(handleGetArticle);
}
