import * as React from "react";
import { Spinner } from "../spinner";

import { AuthenticationContext, AuthenticationContextState } from "./context";
import styles from "./styles.module.scss";

export type LoginButtonProps = {
  className?: string;
};
export const LoginButton: React.FunctionComponent<LoginButtonProps> = ({
  className
}: LoginButtonProps): React.ReactElement => {
  const { login, loading }: AuthenticationContextState = React.useContext<
    AuthenticationContextState
  >(AuthenticationContext);
  return (
    <button
      disabled={loading}
      onClick={async (
        e: React.MouseEvent<HTMLButtonElement>
      ): Promise<void> => {
        e.preventDefault();
        await login();
      }}
      className={`${styles.loginbutton} ${className && className}`}
    >
      {loading ? <Spinner size={20} color={"#fff"} /> : "Login"}
    </button>
  );
};
