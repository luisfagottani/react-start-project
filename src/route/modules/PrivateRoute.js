import React from "react";
import { Route, Redirect } from "react-router-dom";
import withTitle from "./withTitle";

const RouteWithTitle = withTitle(Route);

const PrivateRoute = ({ userSignedIn, component: Component, ...rest }) => {
  userSignedIn = false;
  return (
    <RouteWithTitle
      {...rest}
      render={props =>
        userSignedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
