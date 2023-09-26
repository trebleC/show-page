const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const path = require('path')

function assetsPath(_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
    'static' :
    'static'
  return path.posix.join(assetsSubDirectory, _path)
}


// externals
const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios',
  vueuse:'vueuse',
  'element-plus':'ElementPlus'
}

// CDN外链，会插入到index.html中
const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: []
  },
 // 生产环境
  build: {
    css: ['https://cdn.jsdelivr.net/npm/element-plus@2.3.7/dist/index.min.css'],
    js: [
      'https://cdn.jsdelivr.net/npm/@element-plus/icons-vue',
      'https://cdn.jsdelivr.net/npm/axios@1.5.0/dist/axios.min.js',
      'https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@4.2.4/dist/vue-router.global.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@4.0.0/dist/vuex.global.min.js',
      'https://cdn.jsdelivr.net/npm/@vueuse/core@10.3.0/index.iife.min.js',
      'https://cdn.jsdelivr.net/npm/element-plus@2.3.7/dist/index.full.min.js',



    ]
  }
}
let config = {
  productionSourceMap:false,
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
          //标题
          args[0].title = 'QIQI TEXTILE'
          //CDN加速
          if (process.env.NODE_ENV === 'production') {
            args[0].cdn = cdn.build
          } else {
            args[0].cdn = cdn.dev
          }
          return args
        })
    },

    devServer: {
      proxy: {
        '/dev': {
          target: 'http://127.0.0.1:7001',
          // target: 'http://tsscs.shop',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            "^/dev": "",
          },
        },
        '/upload': {
          target: 'http://tsscs.shop/dev/upload',
          ws: true,
          changeOrigin: true,
        },
      },
    }
  }
  if(process.env.NODE_ENV === 'production'){
    config.configureWebpack.externals = externals
  }

  config.configureWebpack.plugins = [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
module.exports = defineConfig(config)
