const { injectBabelPlugin } = require("react-app-rewired");

function rewirePolished(config, env, polishedBabelOptions = {}) {
  config = injectBabelPlugin(["polished", polishedBabelOptions], config);
  return config;
}

module.exports = rewirePolished;
