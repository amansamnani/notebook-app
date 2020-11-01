import * as React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.scss";
import getConfig, { Config } from "./config";
import * as serviceWorker from "./serviceWorker";
import { HomePage, AuthenticationPage } from "./pages";
import { LockedRoute, ProtectedRoute } from "./components";

const config: Config = getConfig();

const link: any = createHttpLink({
  uri: config.cred.api.url,
  credentials: config.cred.apollo.link.credentials
});
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <LockedRoute
            exact
            path={config.routes.user.auth}
            component={AuthenticationPage}
          />
          <Route exact path={config.routes.home.root} component={HomePage} />
          {/*
          <ProtectedRoute
            exact
            path={config.routes.home.root}
            component={HomePage}
          />
          */}
        </Switch>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
