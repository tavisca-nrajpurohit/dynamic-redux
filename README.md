# @rakoon-badshah/dynamic-redux

![npm (scoped)](https://img.shields.io/npm/v/@rakoon-badshah/dynamic-redux)
![node](https://img.shields.io/node/v/@rakoon-badshah/dynamic-redux)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@rakoon-badshah/dynamic-redux)
![NPM](https://img.shields.io/npm/l/@rakoon-badshah/dynamic-redux)

This is a library to create [Redux](http://redux.js.org/) stores that can have additional reducers dynamically attached at runtime.

It has the following functions from the following respective packages:
createStore : [redux-dynamic-reducers Package](https://www.npmjs.com/package/redux-dynamic-reducer),
combineReducers: [redux](https://www.npmjs.com/package/redux),
get,set : [dot-prop-immutable](https://www.npmjs.com/package/dot-prop-immutable),
composeWithDevTools: [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension)

## Install

```
$ npm install @rakoon-badshah/dynamic-redux
```


## Why this Library?
A Redux store's state tree is created from a single reducer function. [`combineReducers`](http://redux.js.org/docs/api/combineReducers.html) is the mechanism to compose many reducer functions into a single reducer that can be used to build a hierarchical the state tree. It is not possible to modify the reducer function after the store has been initialised.

This library allows you to attach new reducer functions after the store is initialised. This is helpful if you want to use a single global store across a lazily loaded application where not all reducers are available at store creation.


## How to use

### 1. Create the store

The `createStore` function replaces the [Redux `createStore` function](http://redux.js.org/docs/api/createStore.html). It adds the `attachReducers()` function to the store object. It also supports all the built in optional parameters:

```javascript
import { combineReducers,createStore } from '@rakoon-badshah/dynamic-redux'

...

const reducer = combineReducers({ staticReducer1, staticReducer2 })
const store = createStore(reducer)
```

```javascript
const store = createStore(reducer, { initial: 'state' })
```

```javascript
const store = createStore(reducer, applyMiddleware(middleware))
```

```javascript
const store = createStore(reducer, { initial: 'state' }, applyMiddleware(middleware))
```


### 2. Dynamically attach a reducer

#### Not using redux-subspace

Call `attachReducers` on the store with your dynamic reducers to attach them to the store at runtime:

```javascript
store.attachReducers({ dynamicReducer })
```

Multiple reducers can be attached as well:

```javascript
store.attachReducers({ dynamicReducer1, dynamicReducer2 })
```

Reducers can also be added to nested locations in the store:

```javascript
store.attachReducers({
    some: {
        path: {
            to: {
                dynamicReducer
            }
        }
    }
} )
```

```javascript
store.attachReducers({ 'some.path.to': { dynamicReducer } } } })
```

```javascript
store.attachReducers({ 'some/path/to': { dynamicReducer } } } })
```


## Limitations

* Each dynamic reducer needs a unique key
  * If the same key is used in a subsequent attachment, the original reducer will be replaced
* Nested reducers cannot be attached to nodes of the state tree owned by a static reducer