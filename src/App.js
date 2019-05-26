import React from "react";
import { Switch } from "react-router-dom";

import { PRIVATE_ROUTES, NORMAL_ROUTES } from "./route";
import PrivateRoute from "./route/modules/PrivateRoute";
import NormalRoute from "./route/modules/NormalRoute";

class App extends React.Component {
  render() {
    const privateRoutes = PRIVATE_ROUTES.map((route, key) => (
      <PrivateRoute key={key} {...route} />
    ));
    const normalRoutes = NORMAL_ROUTES.map((route, key) => (
      <NormalRoute key={key} {...route} />
    ));

    return (
      <Switch>
        {privateRoutes}
        {normalRoutes}
      </Switch>
    );
  }
}

export default App;
