/* @flow */

import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';
import _ from 'lodash';

import type { Store } from '../types';

export default (store: Store, content: string = '') => {
  const head = Helmet.rewind();
  const assets = webpackIsomorphicTools.assets();

  // Setup html page
  return `
    <!DOCTYPE html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Content-Language" content="en" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

        ${head.base.toString()}
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}

        ${
          // Styles will be presented in production with webpack extract text plugin
          _.keys(assets.styles).map(style =>
            `<link href="${assets.styles[style]}" media="screen, projection" rel="stylesheet" type="text/css" />`)
            .join('\n')
        }

        ${
          // Styles will be presented in development mode
          // I put all of the styles here to smoothen the flick
          _.keys(assets.styles).length === 0 ?
            `<style>${
              // $FlowFixMe: It's not an issue
              require('../theme/normalize.css')._style +
              // $FlowFixMe: It's not an issue
              require('../containers/App/styles.scss')._style +
              // $FlowFixMe: It's not an issue
              require('../containers/Home/styles.scss')._style +
              // $FlowFixMe: It's not an issue
              require('../containers/UserInfo/styles.scss')._style +
              // $FlowFixMe: It's not an issue
              require('../containers/NotFound/styles.scss')._style +
              // $FlowFixMe: It's not an issue
              require('../components/UserList/styles.scss')._style +
              // $FlowFixMe: It's not an issue
              require('../components/UserCard/styles.scss')._style
            }</style>` : ''
        }
      </head>
      <body>
        <div id="react-view">${content || ''}</div>

        <script type="text/javascript">
          ${store && `window.__INITIAL_STATE__=${serialize(store.getState())}`}
        </script>

        <!--[if gte IE 9 ]>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-shim.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-sham.min.js"></script>
        <![endif]-->

        ${
          // Reverse the order of scripts for accessing vendor.js first
          _.keys(assets.javascript).reverse().map(script =>
          `<script src="${assets.javascript[script]}"></script>`)
          .join('\n')
        }
        ${head.script.toString()}
      </body>
    </html>
  `;
};
