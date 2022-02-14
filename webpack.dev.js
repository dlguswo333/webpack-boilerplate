const path=require('path');
const merge=require('webpack-merge');

module.exports={
  mode: 'development',
  entry: './src/index.js',
  devtool: "inline-source-map",
}
