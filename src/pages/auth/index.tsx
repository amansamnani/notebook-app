import * as React from "react";
import { RouteComponentProps } from "react-router";
import Cookies from "universal-cookie";

import { Authentication } from "../../components";
import getConfig, { Config } from "../../config";
import styles from "./styles.module.scss";

const config: Config = getConfig();

type AuthenticationPageProps = RouteComponentProps<{}>;
export const AuthenticationPage: React.FunctionComponent<AuthenticationPageProps> = (
  props: AuthenticationPageProps
): React.ReactElement => (
  <div className={styles.container}>
    <Authentication
      onLogin={async (data: any): Promise<void> => {
        console.log("data: ", data);
        new Cookies().set("session", true);
        props.history.push(config.routes.home.root);
      }}
    >
      <Authentication.Logo
        className={styles.logo}
      
      />
      <Authentication.Form />
      <Authentication.MessageBox />
      <Authentication.LoginButton />
    </Authentication>
  </div>
);
