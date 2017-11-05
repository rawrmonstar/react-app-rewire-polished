const { injectBabelPlugin } = require("react-app-rewired");

function rewirePolished(config, env) {
  config = injectBabelPlugin("polished", config);
  return config;
}

module.exports = rewirePolished;
