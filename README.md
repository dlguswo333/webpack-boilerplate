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

## webpack-dev-server
[webpack link](https://webpack.js.org/configuration/dev-server/)

The plugin can help develop an web app.
It supports hot reload and live reloading.
Install the plugin and run `webpack serve --config <config file>`.
It will automatically rebuild and reload
if source codes have been changed.

## Separate Development and Production Env
It can be simply accomplished by making two different
webpack configuration files, but to manage common configurations,
use `webpack-merge` package. Create `webpack.common.js` and
put all the common parts there. Create `webpack.dev.js` and
`webpack.prod.js`, and insert uncommon codes in those files.

# Babel
Babel converts latest ECMA codes into backwards compatible
version of codes so that older browsers can execute.
Use `@babel/preset-env` to easily load widely used
configurations.

Also, to embed Babel in webpack, use `babel-loader`
webpack plugin. Strangely and interestingly,
without specifying where the babel config file is,
`babel-loader` automatically finds the config file
and use it. See more in the
[link](https://babeljs.io/docs/en/configuration)

## Babel & Polyfill
Babel converts into backwards compatible codes.
However, if matching outdated codes do not exist,
the conversion fails.
That is what Polyfill can do, just like filling
pillows with feathers.
WeakMap, Promise, arrow function and etc... they are
injected by polyfill so that old browsers can execute.

`corejs` is one of third party polyfill package.

## Babel & JSX
Babel can be used to interpret JSX codes.
Use `@babel/preset-react` package to get started.
