import production from "./production.json";
import development from "./development.json";
import test from "./test.json";
import defaultConfig from "./default.json";

export type Config = {
  routes: {
    root: string;
    home: {
      root: string;
    };
    user: {
      root: string;
      profile: string;
      auth: string;
    };
  };
  cred: {
    api: {
      url: string;
    };
    apollo: {
      link: {
        credentials: "include" | "same-origin";
      };
    };
  };
};

const getConfig = (): Config => {
  const { NODE_ENV = "development" } = process.env;
  let config: Config;
  switch (NODE_ENV) {
    case "production":
      config = production as Config;
      break;
    case "development":
      config = development as Config;
      break;
    case "test":
      config = test as Config;
      break;
    default:
      config = defaultConfig as Config;
      break;
  }

  return config;
};

export default getConfig;
