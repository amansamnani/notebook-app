import * as React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RouteComponentProps, withRouter } from "react-router";

import styles from "./styles.module.scss";
import getConfig, { Config } from "../../config";
import { isLoggedIn } from "../../lib";
import { useMutation } from "@apollo/client";
import { LogoutMutation } from "../../api";

const config: Config = getConfig();

type NavbarProps = {
  logo?: string;
  className?: string;
} & RouteComponentProps<{}>;
const _Navbar: React.FunctionComponent<NavbarProps> = ({
  logo,
  className,
  history
}: NavbarProps): React.ReactElement => {
  const [logout, { data, loading, error }] = useMutation(LogoutMutation);

  return (
    <nav className={`${styles.navbar} ${className && className}`}>
      {logo ? (
        <img src={logo} alt={"The Notebook"} className={styles.logo} />
      ) : (
        <h3>The Notebook</h3>
      )}
      {isLoggedIn() ? (
        <button
          className = {styles.logoutButton}
          disabled={loading}
          onClick={() => {
            logout().then(() => history.push(config.routes.user.auth));
          }}
        >
          {loading ? "Logging out..." : "Logout"}
        </button>
      ) : (
        <AiOutlineUser size={"1.5em"} />
      )}
    </nav>
  );
};

export const Navbar = withRouter(_Navbar);
