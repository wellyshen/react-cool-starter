import { Express } from "express";
import chalk from "chalk";

import config from "../config";

export default (app: Express): void => {
  const webpack = require("webpack");
  const webpackConfig = require("../../tools/webpack/config.babel");
  const compiler = webpack(webpackConfig);
  const instance = require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
    headers: { "Access-Control-Allow-Origin": "*" },
    stats: "minimal",
    serverSideRender: true,
    watchOptions: { ignored: /node_modules/ },
  });

  app.use(instance);

  instance.waitUntilValid(() => {
    const url = `http://${config.HOST}:${config.PORT}`;
    console.info(chalk.green(`==> 🌎  Listening at ${url}`));
  });

  app.use(
    require("webpack-hot-middleware")(compiler, {
      log: false,
      path: "/__webpack_hmr",
      heartbeat: 10 * 1000,
    })
  );
};
