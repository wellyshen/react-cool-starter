declare const __CLIENT__: boolean; // eslint-disable-line
declare const __SERVER__: boolean; // eslint-disable-line
declare const __DEV__: boolean; // eslint-disable-line

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

interface Window {
  __INITIAL_STATE__: object;
}
