import { ApolloError } from "@apollo/client";
import * as React from "react";

export type AuthenticationContextState = {
  username: string;
  setUsername: (username: string) => any;
  password: string;
  setPassword: (password: string) => any;
  error: ApolloError | undefined;
  loading: boolean;
  login: (...args: any[]) => Promise<any>;
};
export const AuthenticationContext = React.createContext<
  AuthenticationContextState
>({} as AuthenticationContextState);
