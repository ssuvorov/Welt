import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './containers/App'

const enhancers = [applyMiddleware(thunk, createLogger())]
if (window.devToolsExtension) {
  enhancers.push(window.devToolsExtension())
}

const store = createStore(
  reducers, {}, compose(...enhancers)
)

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
