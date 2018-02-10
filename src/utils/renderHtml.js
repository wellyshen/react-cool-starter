import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';
import { minify } from 'html-minifier';

import type { Store } from '../types';

export default (
  store: Store,
  htmlContent: string = '',
  loadableStateTag: string = ''
) => {
  // react-helmet should be declared after "renderToStaticMarkup()" of "../server.js" or it won't work
  const helmet = Helmet.renderStatic();
  const assets = webpackIsomorphicTools.assets();

  const html = `
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!--[if IE]>
          <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
        <![endif]-->

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="shortcut icon" href="/favicon.ico">

        ${helmet.title.toString()}
        ${helmet.base.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}

        <!-- Insert bundled styles into <link> tag on production -->
        ${Object.keys(assets.styles).map(
          style =>
            `<link href="${
              assets.styles[style]
            }" media="screen, projection" rel="stylesheet" type="text/css">`
        )}

        <!-- Insert bundled styles into <style> tag on development -->
        <!-- I put all of the styles here to smoothen the flick -->
        ${
          Object.keys(assets.styles).length === 0
            ? `
              <style>
                ${require('../../node_modules/normalize.css/normalize.css')
                  ._style +
                  require('../containers/App/styles.scss')._style +
                  require('../containers/Home/styles.scss')._style +
                  require('../containers/UserInfo/styles.scss')._style +
                  require('../containers/NotFound/styles.scss')._style +
                  require('../components/UserList/styles.scss')._style +
                  require('../components/UserCard/styles.scss')._style +
                  require('../components/Error/styles.scss')._style +
                  require('../components/Loading/styles.scss')._style}
              </style>
            `
            : ''
        }
      </head>
      <body>
        <!-- Insert the router, which passed from server-side -->
        <div id="react-view">${htmlContent}</div>

        <!-- Insert loadableState's script tag into page (loadable-components setup) -->
        ${loadableStateTag}

        <!-- Store the initial state into window -->
        <script>
          ${store && `window.__INITIAL_STATE__=${serialize(store.getState())};`}
        </script>

        <!-- Insert bundled scripts into <script> tag -->
        ${Object.keys(assets.javascript)
          .reverse() // Reverse scripts to get correct ordering
          .map(
            script => `<script src="${assets.javascript[script]}"></script>`
          )}

        ${helmet.script.toString()}
      </body>
    </html>
  `;

  // html-minifier configuration, refer to "https://github.com/kangax/html-minifier" for more configuration
  const minifyConfig = {
    collapseWhitespace: true,
    removeComments: true,
    trimCustomFragments: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true
  };

  // Minify html on production
  return __DEV__ ? html : minify(html, minifyConfig);
};
