import * as React from "react";

import { AuthenticationContext } from "./context";
import { Form } from "./form";
import { LoginButton } from "./login-button";
import { MessageBox } from "./message-box";
import { LoginMutation } from "../../api";
import { Logo } from "./logo";
import { useMutation } from "@apollo/client";
import styles from "./styles.module.scss";

type AuthenticationProps = {
  onLogin: (...args: any[]) => any;
  className?: string;
  children: React.ReactNode;
};
type AuthenticationComponent = React.FunctionComponent<AuthenticationProps> & {
  Form: typeof Form;
  LoginButton: typeof LoginButton;
  MessageBox: typeof MessageBox;
  Logo: typeof Logo;
};
const Authentication: AuthenticationComponent = ({
  className,
  onLogin,
  children
}: AuthenticationProps): React.ReactElement => {
  const [loginMutation, { loading, error }] = useMutation(LoginMutation, {
    onCompleted: (data: any) => {
      onLogin(data);
    }
  });
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const login = async (): Promise<void> => {
    await loginMutation({
      variables: {
        input: {
          username,
          password
        }
      }
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        username,
        password,
        setUsername,
        setPassword,
        login,
        loading,
        error
      }}
    >
      <span className={`${styles.container} ${className && className}`}>
        {children}
      </span>
    </AuthenticationContext.Provider>
  );
};

Authentication.Form = Form;
Authentication.MessageBox = MessageBox;
Authentication.LoginButton = LoginButton;
Authentication.Logo = Logo;

export { Authentication };
