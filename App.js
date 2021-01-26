/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Provider } from 'react-redux'
import store from './store/store'

import Products from './components/Products'
import Cart from './components/Cart'

const Tab = createBottomTabNavigator()

// TODO: add icons for tab navigation
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Products" component={Products} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
