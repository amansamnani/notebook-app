import * as React from "react";
import { HashLoader } from "react-spinners";

type SpinnerProps = {
  size?: number;
  color?: string;
};
export const Spinner: React.FunctionComponent<SpinnerProps> = ({
  size,
  color
}: SpinnerProps): React.ReactElement => (
  <HashLoader size={size || 64} color={color || "#000000"} />
);
