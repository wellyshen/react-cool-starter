/* eslint max-len:0 */

import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';

export default (content, initialState) => {
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
          /* Styles will be presented in production with webpack extract text plugin */
          Object.keys(assets.styles).map(style =>
            `<link href="${assets.styles[style]}" media="screen, projection" rel="stylesheet" type="text/css" />`)
            .join('\n')
        }

        ${
          /* Styles will be presented in development mode */
          /* I put all of the styles here to smoothen the flick */
          Object.keys(assets.styles).length === 0 ?
            `<style>${
              require('./theme/normalize.css')._style +
              require('./containers/App/App.scss')._style +
              require('./containers/Home/Home.scss')._style +
              require('./containers/UserInfo/UserInfo.scss')._style +
              require('./containers/NotFound/NotFound.scss')._style +
              require('./components/UserList/UserList.scss')._style +
              require('./components/UserCard/UserCard.scss')._style
            }</style>` : ''
        }
      </head>
      <body>
        <div id="react-view">${content || null}</div>

        <script type="text/javascript">
          ${initialState && `window.__INITIAL_STATE__=${serialize(initialState)}`}
        </script>

        <!--[if gte IE 9 ]>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-shim.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-sham.min.js"></script>
        <![endif]-->

        ${
          /* Reverse the order of scripts for accessing vendor.js first */
          Object.keys(assets.javascript).reverse().map(script =>
          `<script src="${assets.javascript[script]}"></script>`)
          .join('\n')
        }
        ${head.script.toString()}
      </body>
    </html>
  `;
};
