import path from 'path';
import { ServerConfig  } from 'vite';


const config: ServerConfig  = {
  alias: {
    '/@/': path.resolve(__dirname, 'src'),
    '/@assets/': path.resolve(__dirname, 'src/assets'),
  },
  cssPreprocessOptions: {
    less: {
      javascriptEnabled: true,
      additionalData: '@import "./src/assets/style/theme.less";' // 全局 style 引入主题变量
    }
  },
  proxy: {},
}

export default config;