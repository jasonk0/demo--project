//配置别名

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
          'assests': '@/assets',
          'components': '@/components',
          'views': '@/views',
          'network': '@/network',
          'common': '@/common'
      }
    }
  }
}