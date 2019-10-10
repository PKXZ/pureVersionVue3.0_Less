module.exports = {
  runtimeCompiler: true,
  publicPath: './',//404打包资源
  devServer: {
    port: 8090,
    host: '0.0.0.0',
    open: false,
    proxy: null
  }
}
