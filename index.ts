// Allows you to pre-compile ES6 syntax
require("@babel/register")();

// Global variables for server-side
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = process.env.NODE_ENV === "development";

// Run assets require hooks
require("./tools/webpack/hooks")();
// Run server
require("./src/server");
