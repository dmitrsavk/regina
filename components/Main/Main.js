import React, { Component } from "react";
import styled from "styled-components";
import NextLink from "next/link";
import moment from "moment";
import "moment/locale/ru";

import LoggedList from "./List";

moment.locale("ru");

const Wrap = styled.div`
  flex-grow: 1;
  max-width: 1200px;
  padding: 15px;
  margin: 0 auto;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 460px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  font-size: 27px;
  font-weight: 400;
  color: #3498db;
`;

const Date = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;

const Description = styled.div`
  margin-bottom: 5px;
  color: rgba(0, 0, 0, 0.6);
`;

const Link = styled.a`
  width: 100%;
  text-decoration: none;
  color: #000;
  cursor: pointer;

  :hover,
  :active,
  :visited {
    color: #000;
  }

  @media (min-width: 460px) {
    width: calc(50% - 15px);

    :nth-child(odd) {
      margin-right: 15px;
    }

    :nth-child(even) {
      margin-left: 15px;
    }
  }

  @media (min-width: 600px) {
    width: calc(33% - 10px);

    :nth-child(odd) {
      margin-right: 0;
    }

    :nth-child(even) {
      margin-left: 0;
    }

    :nth-child(3n) {
      margin-left: 10px;
    }

    :nth-child(3n - 1) {
      margin-right: 5px;
      margin-left: 5px;
    }

    :nth-child(3n - 2) {
      margin-right: 10px;
    }
  }

  @media (min-width: 900px) {
    width: calc(50% - 25px);

    :nth-child(3n) {
      margin-left: 0;
    }

    :nth-child(3n - 1) {
      margin-right: 0;
      margin-left: 0;
    }

    :nth-child(3n - 2) {
      margin-right: 0;
    }

    :nth-child(odd) {
      margin-right: 25px;
    }

    :nth-child(even) {
      margin-left: 25px;
    }
  }
`;

export default class Main extends Component {
  render() {
    const { articles } = this.props;

    return (
      <Wrap>
        <List>
          {articles.map(
            ({ title, description, imageSrc, createdAt, alias }, id) => (
              <NextLink
                key={id}
                href={{ pathname: "/articles", query: { alias } }}
                as={`/articles/${alias}`}
              >
                <Link>
                  <Item>
                    <Image src={imageSrc} />
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    {createdAt && <Date>{moment(createdAt).format("LL")}</Date>}
                  </Item>
                </Link>
              </NextLink>
            )
          )}
        </List>
        <LoggedList />
      </Wrap>
    );
  }
}
