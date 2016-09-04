const context = require.context('./src', true, /-test\.jsx?$/);
context.keys().forEach(context);
