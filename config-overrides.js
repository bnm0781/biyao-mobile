const { injectBabelPlugin } = require('react-app-rewired')
const path = require('path')

const resolve = (url) => {
  return path.resolve(__dirname, './', url)
}

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  config.resolve.alias = {
    '@': resolve('src'),
    'styles': resolve('src/assets/styles'),
    'icon': resolve('src/assets/icon'),
    'pages': resolve('src/pages'),
    'common': resolve('src/components/common')
  }
  return config;
};