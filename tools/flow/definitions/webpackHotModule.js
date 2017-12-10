/* @flow */

// Avoid webpack hot module error
declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};
