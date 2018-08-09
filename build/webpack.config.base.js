const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const createVueLoaderOptions = require('./vue-loader.config.js')
const isDev = process.env.NODE_ENV === 'development'
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
const config = {
  target:'web',
  mode:process.env.NODE_ENV || 'production',
  entry:path.join(__dirname,'../src/main.js'),
  output:{
    filename:'bundle.[hash:8].js',
    path:path.join(__dirname,'../dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles':resolve('src/styles'),
      'views':resolve('src/views')
    }
  },
  module:{
    rules:[
      {
        test:/\.(vue|js|jsx)$/,
        loader:'eslint-loader',
        exclude:/node_modules/,
        enforce:'pre'   //预处理一遍
      },
      {
        test:/\.vue$/,
        loader:'vue-loader',
        options:createVueLoaderOptions(isDev)
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          {
            loader:'css-loader'
          },
          {
            loader:'postcss-loader',
            options:{
              sourceMap:true
            }
          }
        ]
      },
      {
        test:/\.jsx$/,
        loader:'babel-loader'
      },
      {
        test:'/\.js$/',
        loader:'babel-loader',
        include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test:/\.(jpg|png|svg|jpeg)$/,
        use:{
          loader:'url-loader',
          options:{
            limit:5000,
            name:'resources/[path][name].[hash:8].[ext]'
          }
        }
      },
      {
        test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        use:{
          loader:'url-loader',
          options:{
            limit:10000,
            name:'resources/[path][name].[hash:8].[ext]'
          }
        }
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ]
}
module.exports = config