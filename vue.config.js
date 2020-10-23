const path = require('path')

module.exports = {
  outputDir: 'dist',
  publicPath: '/assistant/',
  assetsDir: 'static',
  configureWebpack: {
    // 解析模块的规则
    resolve: {
      // 配置解析模块路径别名
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}
