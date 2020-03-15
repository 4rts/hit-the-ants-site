module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: '/',
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `@import "@/styles/main.scss";`
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [{
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      }]
    }
  }
}

chainWebpack: config => {
  config
    .module
    .rule("file")
    .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/,)
    .use("url-loader")
    .loader("url-loader")
    .options({
      limit: 10000,
      name: 'assets/fonts/[name].[ext]'
    })
    .end();
}