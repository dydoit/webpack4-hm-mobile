const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const isDev = process.env.NODE_ENV === 'development'
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const baseConfig = require('./webpack.config.base')
const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env':{
      NODE_ENV:isDev?'"development"':'"production"'
    }
  }),
  new htmlPlugin({
    template:path.join(__dirname,'../index.html')
  })
]
const devServer = {
  port:'8090',
  host:'0.0.0.0',
  overlay:{//如果有任何错误,在页面显示错误信息
    errors:true
  },
  hot:true,
  historyApiFallback: { // 必须设置这个，否则路由history模式会返回404
    index: '/index.html'
  },
  proxy: { //webpack3是proxyTable
    '/api':{
      target:'https://mhaimashop.beautyyan.cn',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api' //路径重写
      }
    }
  }
}
let config
if(isDev){
  config = merge(baseConfig,{
    devtool:'#cheap-module-eval-source-map',
    module:{
      rules:[
        {
          test:/\.(styl|stylus)$/,
          use:[
            'vue-style-loader',
            {
              loader:'css-loader'
            },
            {
              loader:'postcss-loader',
              options:{
                sourceMap:true
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    devServer,
    plugins:defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ])
  })
}else{
  config = merge(baseConfig,{
    entry:{
      app:path.join(__dirname,'../src/main.js')
    },
    output:{
      filename:'[name].[chunkhash:8].js'
    },  
    module:{
      rules:[
        {
          test:/\.(styl|stylus)$/,
          use:[
            MiniCssExtractPlugin.loader,
            'css-loader',
            'stylus-loader'
          ]
        }
      ]
    },
    optimization:{
      runtimeChunk: true,
      splitChunks: {
        chunks:'all'
      }
    },
    plugins:defaultPlugins.concat([
      new MiniCssExtractPlugin({
        filename:'styles.[contentHash:8].css'
      })
    ])
  })

}
module.exports = config