import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore , combineReducers } from 'redux'
import { Provider } from 'react-redux'

import ordersReducer from './store/reducers/orders'
import cartReducer from './store/reducers/cart'
import productsReducer from './store/reducers/products';
import ShopNavigation from './navigation/ShopNavigation'

const rootReducer = combineReducers({
  orders : ordersReducer,
  cart : cartReducer,
  products: productsReducer
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
