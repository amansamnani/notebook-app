import * as React from "react";

import styles from "./styles.module.scss";
import logo from "../../lib/assets/images/logo.svg";

type LogoProps = {
  src?: string;
  className?: string;
};
export const Logo: React.FunctionComponent<LogoProps> = ({
  src,
  className
}: LogoProps): React.ReactElement => (
  <img
    src={src || logo}
    alt={"LOGO"}
    className={`${styles.logo} ${className && className}`}
  />
);
