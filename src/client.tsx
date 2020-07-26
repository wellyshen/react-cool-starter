import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { renderRoutes } from "react-router-config";
import { loadableReady } from "@loadable/component";

import createStore from "./store";
import routes from "./routes";

// Get the initial state from server-side rendering
const initialState = window.__INITIAL_STATE__;
const { store, history } = createStore({ initialState });

const render = (Routes: Record<string, unknown>[]) => {
  const renderMethod = (module as any).hot ? ReactDOM.render : ReactDOM.hydrate;

  renderMethod(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {renderRoutes(Routes)}
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById("react-view")
  );
};

// loadable-component setup
loadableReady(() => {
  render(routes);
});

if ((module as any).hot) {
  // Enable webpack hot module replacement for routes
  (module as any).hot.accept("./routes", () => {
    try {
      const nextRoutes = require("./routes").default;

      render(nextRoutes);
    } catch (error) {
      console.error(`==> 😭  Routes hot reloading error ${error}`);
    }
  });
}
