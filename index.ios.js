/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native'
import { createStore } from 'redux'

// Import the reducer and create a store
import { reducer } from './app/todoListRedux'
const store = createStore(reducer)

// Import the App container component
import App from './app/App'

// Pass the store into the app container
const AppWithStore = () => <App store={store} />

AppRegistry.registerComponent('ToDo', () => AppWithStore)
