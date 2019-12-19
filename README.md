# @rakoon-badshah/dynamic-redux

![npm (scoped)](https://img.shields.io/npm/v/@rakoon-badshah/dynamic-redux)
![node](https://img.shields.io/node/v/@rakoon-badshah/dynamic-redux)
![npm bundle size](https://img.shields.io/bundlephobia/min/@rakoon-badshsh/dynamic-redux)
![NPM](https://img.shields.io/npm/l/@rakoon-badshah/dynamic-redux)

npm module for dynamic redux store and related dependencies.

## Install

```
$ npm install @rakoon-badshah/dynamic-redux
```

## Usage

```js
const badshah = require("@rakoon-badshah/dynamic-reducer");

badshah.StateResolver('foo.bar',{foo: {bar: 'unicorn'}});
//=> 'unicorn'
```