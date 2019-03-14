import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createSagaMiddleware from "redux-saga";

import rootReducer, { rootInitialState } from "./reducer";
import rootSaga from "./saga";

export const STORE_RUN = "@@store/STORE_RUN";

export const storeRun = () => ({ type: STORE_RUN });

const isServer = typeof window === "undefined";

class Store {
  constructor(initialState) {
    this._sagaMiddleware = createSagaMiddleware();
    this._reduxStore = createStore(
      rootReducer,
      initialState || {},
      composeWithDevTools(applyMiddleware(this._sagaMiddleware))
    );
  }

  run = (saga, args) => {
    const task = this._sagaMiddleware.run(saga, args);
    return task.done;
  };

  runRootSaga = () => {
    const res = this.run(rootSaga);
    this._reduxStore.dispatch(storeRun());
    return res;
  };

  getReduxStore = () => this._reduxStore;

  dispatch = (...args) =>
    void (
      this._reduxStore &&
      this._reduxStore.dispatch &&
      this._reduxStore.dispatch(...args)
    );

  getState = () => this._reduxStore.getState();
}

let _store = null;

export function getStore(initialState = rootInitialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(initialState);
  }

  // Store in global variable if client
  if (!_store) {
    _store = new Store(initialState);
  }

  return _store;
}
