import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: false,


  // 路由配置
  // routes: [
  //   { exact: true, path: '/', component: '@/pages/home/index' },
  // ],

  // 动态按需加载配置
  // dynamicImport: {},

  outputPath: './dist',

  // publicPath: './sources/',

  // hash: true,
  // analyze: {
  //   analyzerMode: 'server',
  //   analyzerPort: 8888,
  //   openAnalyzer: true,
  //   // generate stats file while ANALYZE_DUMP exist
  //   generateStatsFile: false,
  //   statsFilename: 'stats.json',
  //   logLevel: 'info',
  //   defaultSizes: 'parsed', // stat  // gzip
  // },
  // async chainWebpack(memo, { env, webpack, createCSSRule }) {
  //   console.log(env)
  // }

  define: {
  }
});
