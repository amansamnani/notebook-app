import * as React from "react";
import { GraphQLError } from "graphql";

import { AuthenticationContext, AuthenticationContextState } from "./context";
import styles from "./styles.module.scss";

export type MessageBoxProps = {
  className?: string;
};
export const MessageBox: React.FunctionComponent<MessageBoxProps> = ({
  className
}: MessageBoxProps): React.ReactElement | null => {
  const [errors, setErrors] = React.useState<string[]>([]);
  const { error }: AuthenticationContextState = React.useContext(
    AuthenticationContext
  );

  React.useEffect(() => {
    if (error?.graphQLErrors.length) {
      error.graphQLErrors.map((e: GraphQLError): void => {
        e.message.length &&
          setErrors((old: any) =>
            old.errors && old.errors.length
              ? [old.errors, e.message]
              : [e.message]
          );
      });
    }
  }, [error]);

  if (error) {
    return (
      <span className={`${styles.messagebox} ${className && className}`}>
        <ul>
          {errors?.map((e: string) => (
            <li key={e}>
              <small>{e}</small>
            </li>
          ))}
        </ul>
      </span>
    );
  }

  return null;
};
