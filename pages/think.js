import React from "react";
import Head from "next/head";
import styled from "styled-components";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Think from "../components/Think/Think";

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
    <title>Регина Никитина - Мысли</title>
  </Head>
);

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export default class extends React.Component {
  static async getInitialProps({ req, res }) {
    return {};
  }

  render() {
    return (
      <Wrap>
        <Meta />
        <Header />
        <Think />
        <Footer />
      </Wrap>
    );
  }
}
