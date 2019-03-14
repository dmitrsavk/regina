import * as React from "react";

export function withLogger<Props>(
  Component: React.ComponentType<Props>
): React.ComponentType<Props> {
  return class extends React.Component<Props> {
    componentDidMount() {
      console.log("was mounted");
    }

    onClick = event => {
      console.log("on click in hoc");
    };

    render() {
      return <Component {...this.props} onClick={this.onClick} />;
    }
  };
}
