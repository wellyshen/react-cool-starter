import { Express } from "express";
import chalk from "chalk";

import config from "../config";

export default (app: Express): void => {
  const webpack = require("webpack");
  const webpackConfig = require("../../tools/webpack/client.config").default;
  const compiler = webpack(webpackConfig);
  const instance = require("webpack-dev-middleware")(compiler, {
    headers: { "Access-Control-Allow-Origin": "*" },
    serverSideRender: true,
  });

  app.use(instance);
  app.use(
    require("webpack-hot-middleware")(compiler, {
      log: false,
      path: "/__webpack_hmr",
      heartbeat: 10 * 1000,
    })
  );

  instance.waitUntilValid(() => {
    const url = `http://${config.HOST}:${config.PORT}`;
    console.info(chalk.green(`==> 🌎  Listening at ${url}`));
  });
};
