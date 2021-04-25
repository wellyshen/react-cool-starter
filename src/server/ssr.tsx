import path from "path";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes, matchRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { ChunkExtractor } from "@loadable/server";
import { Helmet } from "react-helmet";
import chalk from "chalk";
import { Request, Response, NextFunction } from "express";
import { Action } from "@reduxjs/toolkit";

import createStore from "../store";
import renderHtml from "./renderHtml";
import routes from "../routes";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { store } = createStore({ url: req.url });

  // The method for loading data from server-side
  const loadBranchData = (): Promise<any> => {
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

  try {
    // Load data from server-side first
    await loadBranchData();

    const statsFile = path.resolve(process.cwd(), "public/loadable-stats");
    const extractor = new ChunkExtractor({ statsFile });

    const staticContext: Record<string, any> = {};
    const App = extractor.collectChunks(
      <Provider store={store}>
        {/* Setup React-Router server-side rendering */}
        <StaticRouter location={req.path} context={staticContext}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
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

    // Pass the route and initial state into html template, the "statusCode" comes from <NotFound />
    res
      .status(staticContext.statusCode === "404" ? 404 : 200)
      .send(renderHtml(head, extractor, htmlContent, initialState));
  } catch (error) {
    res.status(404).send("Not Found :(");
    console.error(chalk.red(`==> 😭  Rendering routes error: ${error}`));
  }

  next();
};
