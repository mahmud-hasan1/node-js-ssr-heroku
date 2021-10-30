const path = require("path");
const nodeExternals = require("webpack-node-externals")
const LoadablePlugin = require('@loadable/webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

let isProduction = false
if(process.env.NodeENV === "production"){
  isProduction = true
}


let resolve =  {
  extensions: ["*", ".ts", ".tsx", ".js", ".jsx"],
    
    alias: {
    "app": path.resolve(__dirname, "./src"),
      "src": path.resolve(__dirname, "./src"),
      "apis": path.resolve(__dirname, "./src/apis"),
      "scss": path.resolve(__dirname, "./src/styles"),
      "store": path.resolve(__dirname, "./src/store"),
      "actions": path.resolve(__dirname, "./src/store/actions"),
      "reducers": path.resolve(__dirname, "./src/store/reducers"),
      "pages": path.resolve(__dirname, "./src/pages"),
      "components": path.resolve(__dirname, "./src/components"),
      "UI": path.resolve(__dirname, "./src/components/UI")
  }
}

let rules = [
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: ["ts-loader"]
  },
  
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-spread",
        '@loadable/babel-plugin'
      ],
      cacheDirectory: true
    }
  },
    {
      test: /\.(css|sass|scss)$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          // options: {
          //   hmr: true
          //   // reloadAll: true
          // }
        },
        "css-loader",
        "sass-loader"
      ]
    },
    {
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: require.resolve("url-loader"),
      options: {
        limit: 10000,
        name: "static/media/[name].[hash:8].[ext]"
      }
    },
    {
      test: /\.(svg||woff2||woff||less||ttf||eot)$/,
      loader: "file-loader",
      options: {
        name: "static/fonts/[name].[hash:8].[ext]"
      }
    }
  
]

const clientConfig = {
  target: "web",
  devtool: isProduction ? "source-map" : 'cheap-module-source-map',
  name: "web",
  mode: isProduction ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "static/js/[name].bundle.js",
    chunkFilename: "static/js/[name].chunk.js",
    hotUpdateChunkFilename: "static/[id].[hash].hot-update.js",
    hotUpdateMainFilename: "static/[hash].hot-update.json"
  },
  // devServer: {
  //   port: 3000,
  //   historyApiFallback: true,
  //   contentBase: "/build",
  //   watchContentBase: true
  // },
  resolve,
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },

  module: {
    rules: rules
  },

  plugins: [
    new LoadablePlugin({ filename: "static/loadable-stats.json" }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
      chunkFilename: "static/css/[name].chunk.[id].css"
    }),
    // new HtmlWebpackPlugin({
    //   filename: "index.html",
    //   template: "public/index.html"
    // })
  ]
};


const serverConfig = {
  name: 'node',
  devtool: isProduction ? "source-map" : 'cheap-module-source-map',
  mode: isProduction ? "production" : "development",
  entry: "./server/server.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "n/server.js",
    libraryTarget:  'commonjs2',
  },
  resolve,
  // externals: [nodeExternals()],
  externals: ['@loadable/component', nodeExternals()],
  module: {
    rules: rules
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
      chunkFilename: "static/css/[id].css"
    })
  ]
};

if(isProduction){
  clientConfig.optimization = {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
  }
}


module.exports = [ clientConfig,  serverConfig  ]