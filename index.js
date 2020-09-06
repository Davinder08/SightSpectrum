/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import AppNavigator from './src/navigator/AppNavigator';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

import {Provider} from 'react-redux';
import configureStore from './src/redux/store/configureStore';

console.disableYellowBox = true;
const store = configureStore();

const KenkoApp = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => KenkoApp);
