/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Application from './pages/Application';
import store from './redux';

export default class rntest extends Component {
   render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('rntest', () => rntest);
