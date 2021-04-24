module.exports = (api) => {
  const isWeb = api.caller((caller) => caller?.target === "isWeb");

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: isWeb ? "usage" : undefined,
          corejs: isWeb ? 3 : false,
        },
      ],
      "@babel/preset-typescript",
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
    plugins: ["@loadable/babel-plugin", "@babel/plugin-transform-runtime"],
    env: {
      development: {
        plugins: isWeb ? ["react-refresh/babel"] : undefined,
      },
    },
  };
};
