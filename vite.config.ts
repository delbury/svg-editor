import path from 'path';

export default {
  alias: {
    '/@/': path.resolve(__dirname, 'src'),
    '/@assets/': path.resolve(__dirname, 'src/assets'),
  },
  cssPreprocessOptions: {
    less: {
      javascriptEnabled: true,
      additionalData: '@import "./src/assets/style/theme.less";' // 全局 style 引入主题变量
    }
  }
}