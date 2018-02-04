/* eslint-disable react/no-danger */

import React from 'react';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';
import _ from 'lodash';

import type { Store } from '../types';

type Props = { store: Store, htmlContent: string };

const Html = ({ store, htmlContent }: Props) => {
  // Should be declared after "renderToStaticMarkup()" of "../server.js" or it won't work
  const head = Helmet.renderStatic();
  const attrs = head.htmlAttributes.toComponent();
  const { lang, ...rest } = attrs || {};
  const assets = webpackIsomorphicTools.assets();

  return (
    <html {...rest} lang={lang || 'en'}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {head.title.toComponent()}
        {head.base.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}

        {/* Rendering bundled styles into <link> tag on production */}
        {_.keys(assets.styles).map(style => (
          <link
            key={_.uniqueId()}
            href={assets.styles[style]}
            media="screen, projection"
            rel="stylesheet"
            type="text/css"
          />
        ))}
        {/* Rendering bundled styles into <style> tag on development */}
        {/* I put all of the styles here to smoothen the flick */}
        {_.keys(assets.styles).length === 0 ? (
          <style
            dangerouslySetInnerHTML={{
              __html:
                require('../theme/normalize.css')._style +
                require('../containers/App/styles.scss')._style +
                require('../containers/Home/styles.scss')._style +
                require('../containers/UserInfo/styles.scss')._style +
                require('../containers/NotFound/styles.scss')._style +
                require('../components/UserList/styles.scss')._style +
                require('../components/UserCard/styles.scss')._style
            }}
          />
        ) : null}
      </head>
      <body>
        <div
          id="react-view"
          // Rendering the route, which passed from server-side
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        <script
          // Storing the initial state into window
          dangerouslySetInnerHTML={{
            __html:
              store &&
              `window.__INITIAL_STATE__=${serialize(store.getState())};`
          }}
        />
        {/* Rendering bundled scripts into <script> tag */}
        {_.keys(assets.javascript).map(script => (
          <script key={_.uniqueId()} src={assets.javascript[script]} />
        ))}
        {head.script.toComponent()}
      </body>
    </html>
  );
};

export default Html;
