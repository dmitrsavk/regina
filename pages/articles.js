import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { connect } from "react-redux";

import { getArticle } from "../store/articles/saga";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Article from "../components/Article/Article";

const Meta = ({ title }) => (
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
    <title>{title}</title>
  </Head>
);

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

class Articles extends React.Component {
  static async getInitialProps({ req, res, store, isServer, query }) {
    const alias = isServer ? req.params.alias : query.alias;

    if (!store.getState().articles[alias]) {
      await store.run(getArticle, { payload: { alias } });
    }

    return { alias };
  }

  render() {
    const article = this.props.articles.articles[this.props.alias];

    return (
      <Wrap>
        <Meta title={article.title} />
        <Header noMargin />
        <Article article={article} />
        <Footer />
      </Wrap>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  getArticle: alias => dispatch(actions.getArticle({ alias }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);
