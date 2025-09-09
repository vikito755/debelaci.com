export interface Config {
  apiBaseUrl: string;
}

const loadConfig = (): Config => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  if (!apiBaseUrl) {
    throw new Error("Environment variables not found.");
  }

  const config: Config = {
    apiBaseUrl,
  };

  return config;
};

const envConfig = loadConfig();

export default envConfig;
