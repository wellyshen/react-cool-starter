import serialize from 'serialize-javascript';
import { minify } from 'html-minifier';

export default (
  head: Object,
  assets: Object,
  htmlContent: string,
  initialState: Object,
  loadableStateTag: string
): string => {
  // Use pre-defined assets in development. "main" is the default webpack generated name.
  const envAssets = __DEV__
    ? { js: '/assets/main.js', css: '/assets/main.css' }
    : assets;

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

        <!-- Insert bundled styles into <link> tag -->
        ${Object.keys(envAssets)
          .map(
            key =>
              key.substr(key.length - 3) === 'css'
                ? `<link href="${
                    envAssets[key]
                  }" media="screen, projection" rel="stylesheet" type="text/css">`
                : ''
          )
          .join('')}

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

        <!-- Insert bundled scripts into <script> tag -->
        ${Object.keys(envAssets)
          .map(
            key =>
              key.substr(key.length - 2) === 'js'
                ? `<script src="${envAssets[key]}"></script>`
                : ''
          )
          .join('')}

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
