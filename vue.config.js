module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        // 设置 HTML title 属性值
        args[0].title= '设置 HTML title 属性值'
        return args
      })
  }
}