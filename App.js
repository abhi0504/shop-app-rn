import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

import ShopNavigation from './navigation/ShopNavigation'

// const store = createStore(rootReducer);


export default function App() {
  return (
      <ShopNavigation />
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
