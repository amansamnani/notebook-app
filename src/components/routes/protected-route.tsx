import * as React from "react";
import { Route, Redirect } from "react-router-dom";

import { isLoggedIn } from "../../lib";
import getConfig, { Config } from "../../config";
import { Spinner } from "../spinner";

const config: Config = getConfig();

class RouteRender extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { authorized: null };
  }

  componentDidMount() {
    console.log("fetching logged in detail...");
    /*
    isLoggedIn()
      .then((loggedIn: boolean) => {
        console.log("isLoggedIn: ", loggedIn);
        this.setState({ authorized: loggedIn });
      })
      .catch((err: Error) => {
        console.log(err.message);
        this.setState({ authorized: false });
      });
     */
  }

  render() {
    console.log("authorized: ", this.state.authorized);
    if (this.state.authorized === null) {
      return <Spinner />;
    }
    if (this.state.authorized === true) {
      const { component: Component, componentProps } = this.props;
      return <Component {...componentProps} />;
    } else if (this.state.authorized === false) {
      return (
        <Redirect
          to={{
            pathname: config.routes.user.auth,
            state: { from: this.props.location }
          }}
        />
      );
    }
    return <Spinner />;
  }
}

type ProtectedRouteProps = any & {
  component: React.ReactNode;
};
export const ProtectedRoute = ({
  component: Component,
  ...rest
}: ProtectedRouteProps): React.ReactElement => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isLoggedIn()) {
          return <Component {...props} />;
        } else {
          return <Redirect to={config.routes.user.auth} />;
        }
      }}
    />
  );
};
