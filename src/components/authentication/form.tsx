import * as React from "react";

import { AuthenticationContext, AuthenticationContextState } from "./context";
import styles from "./styles.module.scss";

export type FormProps = {
  className?: string;
};
export const Form: React.FunctionComponent<FormProps> = ({
  className
}: FormProps): React.ReactElement | null => {
  const {
    username,
    setUsername,
    password,
    setPassword
  }: AuthenticationContextState = React.useContext(AuthenticationContext);

  return (
    <form className={`${styles.form} ${className && className}`}>
      <input
        placeholder={"Username"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setUsername(e.target.value);
        }}
        name={"username"}
        id={"username"}
        value={username}
      />
      <input
        placeholder={"Password"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setPassword(e.target.value);
        }}
        name={"password"}
        id={"password"}
        type={"password"}
        value={password}
      />
    </form>
  );
};
