const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function assetsPath(_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
    'static' :
    'static'
  return path.posix.join(assetsSubDirectory, _path)
}

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      ]
    },
  },
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title = 'shop'
          return args
        })
    },

    devServer: {
      proxy: {
        '/dev': {
          target: 'http://127.0.0.1:7001',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            "^/dev": "",
          },
        },
        '/song': {
          target: 'http://localhost:4000',
          ws: true,
          changeOrigin: true,
        },
      },
    }
  })
