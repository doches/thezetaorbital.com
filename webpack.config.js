var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require("html-webpack-template");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "eval",
  entry: './src/index.tsx',
  output: {
    filename: 'app-[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /(node_modules)/,
        options: {
          configFile: "tsconfig.json"
        }
      }, {
        test: /\.(le|sa|sc|c)ss$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: ["style-loader", "css-loader", "less-loader"]
      }, {
        test: /\.(jpg|png|svg|eot|woff|woff2|ttf)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }, {
        test: /\.html$/,
        loader: "html-loader"
      }, {
        test: /\.(mp4|ogg|webm|ogv)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: 'video/'
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".js",
      ".less"
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: HtmlWebpackTemplate,
      favicon: "src/img/favicon.png",
      // googleAnalytics: {
      //   trackingId: "UA-91832446-1",
      //   pageViewOnLoad: true,
      // },
      meta: [
        {
          name: "description",
          content: ""
        },
        {
          name: "keywords",
          content: ""
        }
      ],
      lang: "en-US",
      title: "The Zeta Orbital"
    }),
    new CopyWebpackPlugin([
      {
        from: "static"
      }
    ])
  ],
  devServer: {
    clientLogLevel: "warning",
    compress: false,
    contentBase: path.join(__dirname, "src")
  }
};
