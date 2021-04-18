import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { RouteConfig, renderRoutes } from "react-router-config";
import { loadableReady } from "@loadable/component";

import createStore from "../store";
import routes from "../routes";

// Get the initial state from server-side rendering
const initialState = window.__INITIAL_STATE__;
const { store, history } = createStore({ initialState });

const render = (Routes: RouteConfig[]) =>
  ReactDOM.hydrate(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {renderRoutes(Routes)}
      </ConnectedRouter>
    </Provider>,
    document.getElementById("react-view")
  );

// loadable-component setup
loadableReady(() => render(routes as RouteConfig[]));
