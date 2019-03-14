import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { spawn } from 'redux-saga/effects';

import indexSaga from './store/index/saga';
import articlesSaga from './store/articles/saga';

es6promise.polyfill();

function* rootSaga() {
  yield spawn(indexSaga);
  yield spawn(articlesSaga);
}

export default rootSaga;
