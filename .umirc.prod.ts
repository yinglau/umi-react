import { defineConfig } from 'umi';

export default defineConfig({
  // 路由配置
  // routes: [
  //   { exact: true, path: '/', component: '@/pages/home/index' },
  // ],

  // 动态按需加载配置
  // dynamicImport: {},

  // outputPath: './dist',

  // publicPath: './sources/',

  hash: true,
  analyze: {
    analyzerMode: 'static',
    // analyzerPort: 8001,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  async chainWebpack(memo, { env, webpack, createCSSRule }) {
  },
  extraBabelPlugins: [
    'babel-plugin-transform-remove-console'
  ]
});
