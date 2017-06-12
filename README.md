# eslint-config-videoamp-node
[![Build Status](https://semaphoreci.com/api/v1/projects/e82eb6c6-567e-4118-8b9b-a3e8e954b497/1363803/badge.svg)](https://semaphoreci.com/videoamp/eslint-config-videoamp-node)
[![npm version](https://badge.fury.io/js/eslint-config-videoamp-node.svg)](https://badge.fury.io/js/eslint-config-videoamp-node)

This package uses ESLint to enforce VideoAmp's code style and provides an extended configuration of our base rules (found at [`eslint-config-videoamp`](https://github.com/VideoAmp/eslint-config-videoamp)) for our Node.js projects.

If you are looking for our extended configuration for our React.js projects, see [`eslint-config-videoamp-react`](https://github.com/VideoAmp/eslint-config-videoamp-react).

## Install
### `yarn`
```sh
yarn add --dev eslint-config-videoamp-node eslint
```
### `npm`
```sh
npm install --save-dev eslint-config-videoamp-node eslint
```

## Usage
Add `"extends": "videoamp-node"` to your `.eslintrc`.

## Resources
- [ESLint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
<!-- TODO: Add dependencies here -->

## Contributing
You can make sure this module lints with itself using `yarn lint`.
