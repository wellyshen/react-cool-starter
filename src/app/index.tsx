import React from "react";
import { RouteProps, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";
import { hot } from "react-hot-loader";

import logo from "../static/logo.svg";
import config from "../config";
// Import your global styles here
import "normalize.css/normalize.css";
import styles from "./styles.scss";

interface Route {
  route: { routes: RouteProps[] };
}

const App = ({ route }: Route) => (
  <div className={styles.App}>
    <Helmet {...config.APP} />
    <Link to="/" className={styles.header}>
      <img src={logo} alt="Logo" role="presentation" />
      <h1>{config.APP.title}</h1>
    </Link>
    <hr />
    {/* Child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

export default hot(module)(App);
