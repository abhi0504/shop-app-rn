import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore , combineReducers } from 'redux'
import { Provider } from 'react-redux'

import shopReducer from './store/reducers/shop'
import ShopNavigation from './navigation/ShopNavigation'

const rootReducer = combineReducers({
  shop : shopReducer
})

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigation />
    </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
