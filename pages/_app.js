import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';

import { getStore } from '../Store';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const store = getStore();
    ctx.store = store;
    const reduxStore = store.getReduxStore();
    //INFO: waiting initial sagas
    await store.runRootSaga();
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, initialReduxState: reduxStore.getState() };
  }

  constructor(props) {
    super(props);
    const store = getStore(props.initialReduxState);
    this.reduxStore = store.getReduxStore();
    store.runRootSaga();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={this.reduxStore}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    );
  }
}

export default MyApp;
