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

  antd: false,

  chunks: ['vendors', 'umi'],

  chainWebpack(memo, { env, webpack, createCSSRule }) {
    memo.optimization.splitChunks({
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|redux-saga|re-select|dva|moment)[\\/]/,
          priority: -10,
        },
        // antdesigns: {
        //   name: 'antdesigns',
        //   chunks: 'all',
        //   test: /[\/]node_modules[\/](@ant-design|antd)[\/]/,
        //   priority: -11,
        // }
      },
    });
  },
  extraBabelPlugins: ['babel-plugin-transform-remove-console'],
});
