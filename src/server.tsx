import path from "path";
import logger from "morgan";
import express from "express";
import compression from "compression";
import helmet from "helmet";
import hpp from "hpp";
import favicon from "serve-favicon";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes, matchRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { Helmet } from "react-helmet";
import chalk from "chalk";
import { Action } from "@reduxjs/toolkit";

import createStore from "./store";
import renderHtml from "./utils/renderHtml";
import routes from "./routes";
import config from "./config";

const app = express();

// Use helmet to secure Express with various HTTP headers
app.use(helmet({ contentSecurityPolicy: false }));
// Prevent HTTP parameter pollution
app.use(hpp());
// Compress all requests
app.use(compression());

// Use for http request debug (show errors only)
app.use(logger("dev", { skip: (_, res) => res.statusCode < 400 }));
app.use(favicon(path.resolve(process.cwd(), "public/favicon.ico")));
app.use(express.static(path.resolve(process.cwd(), "public")));

if (__DEV__) {
  /* Run express as webpack dev server */
  const webpack = require("webpack");
  const webpackConfig = require("../tools/webpack/config.babel");
  const compiler = webpack(webpackConfig);
  const instance = require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
    headers: { "Access-Control-Allow-Origin": "*" },
    stats: "minimal",
    serverSideRender: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  });

  app.use(instance);

  instance.waitUntilValid(() => {
    const url = `http://${config.HOST}:${config.PORT}`;
    console.info(chalk.green(`==> 🌎  Listening at ${url}`));
  });

  app.use(require("webpack-hot-middleware")(compiler));
}

// Register server-side rendering middleware
app.get("*", (req, res) => {
  const { store } = createStore({ url: req.url });

  // The method for loading data from server-side
  const loadBranchData = (): Promise<any> => {
    // @ts-expect-error
    const branch = matchRoutes(routes, req.path);
    const promises = branch.map(({ route, match }) => {
      if (route.loadData)
        return Promise.all(
          route
            .loadData({
              params: match.params,
              getState: store.getState,
              req,
              res,
            })
            .map((item: Action) => store.dispatch(item))
        );

      return Promise.resolve(null);
    });

    return Promise.all(promises);
  };

  (async () => {
    try {
      // Load data from server-side first
      await loadBranchData();

      const statsFile = path.resolve(
        process.cwd(),
        "public/loadable-stats.json"
      );
      const extractor = new ChunkExtractor({ statsFile });

      const staticContext: Record<string, any> = {};
      const App = (
        <ChunkExtractorManager extractor={extractor}>
          <Provider store={store}>
            {/* Setup React-Router server-side rendering */}
            <StaticRouter location={req.path} context={staticContext}>
              {/*
              // @ts-expect-error */}
              {renderRoutes(routes)}
            </StaticRouter>
          </Provider>
        </ChunkExtractorManager>
      );

      const initialState = store.getState();
      const htmlContent = renderToString(App);
      // head must be placed after "renderToString"
      // see: https://github.com/nfl/react-helmet#server-usage
      const head = Helmet.renderStatic();

      // Check if the render result contains a redirect, if so we need to set
      // the specific status and redirect header and end the response
      if (staticContext.url) {
        res.status(301).setHeader("Location", staticContext.url);
        res.end();

        return;
      }

      // Check page status
      const status = staticContext.status === "404" ? 404 : 200;

      // Pass the route and initial state into html template
      res
        .status(status)
        .send(renderHtml(head, extractor, htmlContent, initialState));
    } catch (error) {
      res.status(404).send("Not Found :(");

      console.error(chalk.red(`==> 😭  Rendering routes error: ${error}`));
    }
  })();
});

// @ts-expect-error
app.listen(config.PORT, config.HOST, (error) => {
  if (error) console.error(chalk.red(`==> 😭  OMG!!! ${error}`));
});
