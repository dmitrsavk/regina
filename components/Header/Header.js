import React, { Component } from "react";
import styled from "styled-components";
import NextLink from "next/link";

const Wrap = styled.div`
  flex-grow: 0;
  background-color: #f5f7f8;
  margin-bottom: 25px;

  ${p => p.noMargin && 'margin-bottom: 0'};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  padding: 15px;
  margin: 0 auto;

  @media (min-width: 460px) {
    justify-content: flex-end;
  }
`;

const Link = styled.a`
  color: #3498db;
  text-decoration: none;
  margin-right: 20px;
  cursor: pointer;

  :hover {
    color: #1d78b5;
  }

  :active,
  :visited {
    color: #3498db;
  }

  :last-child {
    margin-right: 0;
  }

  ${p =>
    p.active &&
    `
    color: #1d78b5;
    font-weight: 500;
    text-decoration: underline;
  `};
`;

const links = [
  {
    title: "Главная",
    href: "/"
  },
  {
    title: "Книги",
    href: "/books"
  },
  {
    title: "Мысли",
    href: "/think"
  },
  {
    title: "Кофе",
    href: "/coffee"
  }
];

export default class Header extends Component {
  state = {
    activeLink: links[0]
  };

  componentDidMount() {
    const path = location.pathname;

    const activeLink = links.find(link => link.href === path);

    this.setState({ activeLink });
  }

  render() {
    const { noMargin } = this.props;

    return (
      <Wrap noMargin={noMargin}>
        <Content>
          {links.map(({ title, href }, id) => (
            <NextLink key={id} href={href}>
              <Link
                active={
                  this.state.activeLink && this.state.activeLink.href === href
                }
              >
                {title}
              </Link>
            </NextLink>
          ))}
        </Content>
      </Wrap>
    );
  }
}
