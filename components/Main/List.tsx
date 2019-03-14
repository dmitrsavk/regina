import * as React from "react";

import { withLogger } from "./Hoc";

type ListProps = {
  text: string;
};

type ListState = {
  itemsAmount: number;
};

class List extends React.Component<ListProps, ListState> {
  render() {
    const { text } = this.props;

    return <div>{text}</div>;
  }
}

const LoggedList = withLogger<ListProps>(List);

onClick = event => {
  console.log("on click in component");
};

export default () => <LoggedList text="hello" onClick={onClick} />;
