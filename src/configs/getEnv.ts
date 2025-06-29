const getEnv = (key: string): string => {
  const env = process.env[key];
  if (!env) {
    throw new Error(`Environment variable ${key} is not defined`);
  }

  return env;
};

export { getEnv };
