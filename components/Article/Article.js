import React, { Component } from "react";
import styled from "styled-components";
import NextLink from "next/link";
import moment from "moment";
import "moment/locale/ru";
import { Parallax } from "react-parallax";

import ArticleCss from "./ArticleCss";

moment.locale("ru");

const Wrap = styled.div`
  flex-grow: 1;
`;

const ContentWrap = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 15px;
  font-family: 'PT Serif', serif;
`;

const ParallaxWrap = styled.div`
  width: 100%;
`;

const ParallaxContentWrap = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: 900px;
  height: 50vh;
  padding: 15px;
  padding-bottom: 30px;
  margin: 0 auto;
  color: #fff;
`;

const ParallaxContent = styled.div``;

const ParallaxContentTitle = styled.h1`
  margin: 0;
  margin-bottom: 10px;
  font-size: 27px;
  font-weight: 400;

  @media (min-width: 600px) {
    font-size: 46px;
  }
`;

const ParallaxContentDate = styled.div`
  font-size: 23px;
  font-weight: 300;

  @media (min-width: 600px) {
    font-size: 31px;
  }
`;

export default class Article extends Component {
  render() {
    const {
      article: { title, content, description, createdAt, imageSrc }
    } = this.props;

    return (
      <Wrap>
        <ArticleCss />

        <ParallaxWrap>
          <Parallax bgImage={imageSrc} strength={300} blur={5}>
            <ParallaxContentWrap>
              <ParallaxContent>
                <ParallaxContentTitle>{title}</ParallaxContentTitle>
                <ParallaxContentDate>
                  {moment(createdAt).format("LL")}
                </ParallaxContentDate>
              </ParallaxContent>
            </ParallaxContentWrap>
          </Parallax>
        </ParallaxWrap>

        <ContentWrap dangerouslySetInnerHTML={{ __html: content }} />
      </Wrap>
    );
  }
}
