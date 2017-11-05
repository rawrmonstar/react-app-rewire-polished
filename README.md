# react-app-rewire-polished
Add [babel-plugin-polished](https://github.com/styled-components/babel-plugin-polished) to a [create-react-app](https://github.com/facebookincubator/create-react-app) app via [react-app-rewired](https://github.com/timarney/react-app-rewired).

## Installation

```sh
yarn add --dev react-app-rewire-polished
```

or

```sh
npm install --save-dev  react-app-rewire-polished
```

## Usage

```js
// config-overrides.js
const rewirePolished = require('react-app-rewire-polished');

module.exports = function override (config, env) {
  config = rewirePolished(config, env);
  // other rewires...
  return config;
}
```

or

```js
// config-overrides.js
const { compose } = require('react-app-required')
const rewirePolished = require('react-app-rewire-polished');

module.exports = compose(
  rewirePolished,
  // other rewires...
);
```
