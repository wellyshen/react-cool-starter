import serialize from "serialize-javascript";
import { minify } from "html-minifier";

export default (
  head: Record<string, any>,
  extractor: Record<string, any>,
  htmlContent: string,
  initialState: Record<string, unknown>
): any => {
  const html = `
    <!doctype html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />

        ${head.title.toString()}
        ${head.base.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}

        <!-- Insert bundled styles into <link> tag -->
        ${extractor.getLinkTags()}
        ${extractor.getStyleTags()}
      </head>
      <body>
        <!-- Insert the router, which passed from server-side -->
        <div id="react-view">${htmlContent}</div>

        <!-- Store the initial state into window -->
        <script>
          // Use serialize-javascript for mitigating XSS attacks. See the following security issues:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__INITIAL_STATE__=${serialize(initialState)};
        </script>

        <!-- Insert bundled scripts into <script> tag -->
        ${extractor.getScriptTags()}
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
    minifyURLs: true,
  };

  // Minify HTML in production
  return __DEV__ ? html : minify(html, minifyConfig);
};
