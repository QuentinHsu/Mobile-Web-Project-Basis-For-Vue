module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        // 设置 HTML title 属性值
        args[0].title= '设置 HTML title 属性值'
        return args
      })
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 100, // 换算基数，默认100。样式代码中直接写 设计稿的 Web px 值
            // exclude: /(node_module)/, // 默认 false。在不需要转换 UI 框架中的 px 为 rem 时，取消注释。
          }),
        ]
      }

    }
  }
}