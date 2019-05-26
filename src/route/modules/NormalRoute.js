import React from "react";
import { Route } from "react-router-dom";

import withTitle from "./withTitle";

const RouteWithTitle = withTitle(Route);

const NormalRoute = ({ component: Component, ...rest }) => (
  <RouteWithTitle {...rest} render={props => <Component {...props} />} />
);

export default NormalRoute;
