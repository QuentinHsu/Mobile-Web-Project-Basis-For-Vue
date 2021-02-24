module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        // 设置 HTML title 属性值
        args[0].title = '设置 HTML title 属性值'
        return args
      })
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 100, // 换算基数，默认 100。 对应计算根节点中的割分视口份数值。以此样式代码中可直接写 设计稿的 Web px 值
            // exclude: /(node_module)/, // 默认转换整个项目除了 index.html 外的所有文件内容中的 px。在不需要转换 UI 框架中的 px 时，须取消注释。
          }),
        ]
      }

    }
  }
}