declare const __CLIENT__: boolean;
declare const __SERVER__: boolean;
declare const __DEV__: boolean;

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare namespace NodeJS {
  interface Global {
    __CLIENT__: boolean;
    __SERVER__: boolean;
    __DEV__: boolean;
  }
}

interface Window {
  __INITIAL_STATE__: object;
}
