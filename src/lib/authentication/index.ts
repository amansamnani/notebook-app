import Cookies from "universal-cookie";
import { isEmpty } from "lodash";

export const isLoggedIn = (): boolean => {
  try {
    const cookies: Cookies = new Cookies();
    const session: any = cookies.get("session");
    return !isEmpty(session);
  } catch (err) {
    return false;
  }
};
