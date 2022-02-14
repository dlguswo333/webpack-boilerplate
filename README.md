# webpack-boilerplate
This repository is a boilerplate for developing
web frontend which incorporates
`babel`, `webpack`, and polyfill `core-js`.

`webpack` automatically loads and execute `babel`
when processing `*.js` files as defined in
`module` property in `webpack.config.js` file.

Consider importing `css-loader`, `sass-loader`, and
`style-loader` if you want to import css classes
in JS files.

## Babel & Polyfill
Babel converts up to date codes into outdated codes
to make it understandable to outdated browser.
However, if matching outdated codes do not exist,
the conversion fails.
That is what Polyfill can do, just like filling
pillows with feathers.
WeakMap, Promise, and etc... they are injected by
Polyfill so that old browsers can execute.

## webpack-dev-server
[webpack link](https://webpack.js.org/configuration/dev-server/)

The plugin can help develop an web app.
It supports hot reload and live reloading.
Install the plugin and run `webpack serve --config <config file>`.
It will automatically rebuild and reload
if source codes have been changed.
