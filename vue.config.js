const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
//关闭校验功能，避免未声明变量报错的情况
module.exports = {
  lintOnSave: false,
  devServer: {
      proxy: {
        '/api': {
            target: 'http://39.98.123.211',
            //pathRewrite: { '^/api': '' },
      },
    },
  },
}