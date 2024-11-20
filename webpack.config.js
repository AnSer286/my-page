const path = require('path');
   const HtmlWebpackPlugin = require('html-webpack-plugin');

   module.exports = {
       entry: './scr/index.js',
       output: {
           filename: 'bundle.js',
           path: path.resolve(__dirname, 'dist'),
       },
       module: {
           rules: [
               {
                   test: /\.scss$/,
                   use: [
                       'style-loader',
                       'css-loader',  
                       'sass-loader'  
                   ]
               },
               {
                   test: /\.css$/,
                   use: [
                       'style-loader',
                       'css-loader'
                   ]
               },
           ],
       },
       plugins: [
           new HtmlWebpackPlugin({
               template: './scr/index.html',
               filename: 'index.html'
           }),
       ],
       devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
       mode: 'development',
   };