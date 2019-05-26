import React from "react";

const withTitle = WrappedComponent => {
  const HOC = class extends React.Component {
    componentDidMount() {
      const { title } = this.props;
      const defaultTitle = "Bob N Wine";
      document.title = !!title ? title + " | " + defaultTitle : "Bob N Wine";
    }

    render() {
      const { title, ...rest } = this.props;
      return <WrappedComponent {...rest} />;
    }
  };

  return HOC;
};

export default withTitle;
