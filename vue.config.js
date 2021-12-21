const glob = require('glob')
const pxtorem = require('postcss-pxtorem')

function getEntry (globPath) {
  const entries = {}
  glob.sync(globPath).forEach((entry) => {
    const tmp = entry.split('/').splice(-3)
    entries[tmp[1]] = {
      entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + 'index.js',
      template: 'public/index.html',
      filename: tmp[1] + '.html'
    }
  })
  return entries
}

const pages = getEntry('./src/pages/**?/*.vue')

module.exports = {
  pages,
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    index: '/',
    open: process.platform === 'darwin',
    host: '',
    port: 9999,
    https: false,
    hotOnly: false,
    before: app => {
      app.get('/', (req, res, next) => {
        for (const i in pages) {
          res.write(`<a target="_self" href="/${i}"><h1>/${i}</h1></a>`)
        }
        res.end()
      })
    }
  },
  css: {
    loaderOptions: {
      css: {
        // options for css-loader
      },
      postcss: {
        // options for postcss-loader
        plugins: [
          pxtorem({
            rootValue: 37.5, // //UI图片的基准值 750px就是75,640px就是64,默认为75
            propList: ['*']
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.limit = 100
        return options
      })
    // 移除多页面preload,prefetch插件
    Object.keys(pages).forEach(entryName => {
      config.plugins.delete(`prefetch-${entryName}`)
      config.plugins.delete(`preload-${entryName}`)
    })
  }
}
