import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import homepage from '../Home/homepage'

export const routes = {
  root: "/",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={homepage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
