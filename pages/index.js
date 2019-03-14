import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { connect } from "react-redux";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

import { actions } from "../store/index/actions";

import { getArticles } from "../store/index/saga";

const Meta = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#3498db" />
    <link rel="manifest" href="/static/manifest.json" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    />
    <link
      href="https://fonts.googleapis.com/css?family=PT+Serif:300,400,500"
      rel="stylesheet"
    />
    <title>Регина Никитина - Блог</title>
  </Head>
);

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

class Index extends React.Component {
  static async getInitialProps({ req, res, store, isServer }) {
    if (store.getState().index.status === "INITIAL") {
      await store.run(getArticles);
    }

    return {};
  }

  render() {
    const { articles } = this.props.index;

    return (
      <Wrap>
        <Meta />
        <Header />
        <Main articles={articles} />
        <Footer />
      </Wrap>
    );
  }
}

const mapStateToProps = state => ({
  index: state.index
});

const mapDispatchToProps = dispatch => ({
  getArticles: () => dispatch(actions.getArticles())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
