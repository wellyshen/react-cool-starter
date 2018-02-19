import serialize from 'serialize-javascript';
import { minify } from 'html-minifier';

export default (
  head: Object,
  assets: Object,
  htmlContent: string,
  initialState: Object,
  loadableStateTag: string
): string => {
  const html = `
    <!doctype html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!--[if IE]>
          <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
        <![endif]-->

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="shortcut icon" href="/favicon.ico">

        ${head.title.toString()}
        ${head.base.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}

        <!-- In development, use the pre-defined style (becasue it no hash) -->
        <!-- In production, insert bundled styles into <link> tag -->
        ${
          __DEV__
            ? '<link href="/assets/main.css" media="screen, projection" rel="stylesheet" type="text/css">'
            : Object.keys(assets).map(
                key =>
                  assets[key].css
                    ? `<link href="${
                        assets[key].css
                      }" media="screen, projection" rel="stylesheet" type="text/css">`
                    : ''
              )
        }

      </head>
      <body>
        <!-- Insert the router, which passed from server-side -->
        <div id="react-view">${htmlContent}</div>

        <!-- Insert loadableState's script tag into page (loadable-components setup) -->
        ${loadableStateTag}

        <!-- Store the initial state into window -->
        <script>
          // Use serialize-javascript for mitigating XSS attacks. See the following security issues:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__INITIAL_STATE__=${serialize(initialState)};
        </script>

        <!-- In development, use the pre-defined script (becasue it no hash) -->
        <!-- In production, insert bundled scripts into <script> tag -->
        ${
          __DEV__
            ? '<script src="/assets/main.js"></script>'
            : Object.keys(assets)
                .reverse() // Reverse scripts to get correct ordering
                .map(key => `<script src="${assets[key].js}"></script>`)
        }

        ${head.script.toString()}
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

  // Minify html in production
  return __DEV__ ? html : minify(html, minifyConfig);
};
