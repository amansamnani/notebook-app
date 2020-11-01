import * as React from "react";

import styles from "./styles.module.scss";

type CardProps = {
  children?: React.ReactNode;
  style?: any;
  className?: string;
  onClick?: (...args: any[]) => any;
};
export const Card: React.FunctionComponent<CardProps> = ({
  style,
  onClick,
  className,
  children
}: CardProps): React.ReactElement => {
  return (
    <div
      {...(onClick && { onClick })}
      className={`${styles.card} ${onClick && styles.hover} ${className || ""}`}
      style={style || {}}
    >
      {children}
    </div>
  );
};
