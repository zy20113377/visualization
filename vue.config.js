module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/var.scss";',
      },
    },
  },
  configureWebpack: (config) => {
    config['performance'] = {
      //打包文件大小配置
      maxEntrypointSize: 10000000,
      maxAssetSize: 30000000,
    };
  },
};
