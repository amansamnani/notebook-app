import * as React from "react";
import { Route, Redirect } from "react-router-dom";

import { isLoggedIn } from "../../lib";
import getConfig, { Config } from "../../config";

const config: Config = getConfig();

type LockedRouteProps = any & {
  component: React.ReactNode;
};
export const LockedRoute = ({
  component: Component,
  ...rest
}: LockedRouteProps): React.ReactElement => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isLoggedIn()) {
          return <Redirect to={config.routes.home.root} />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};
