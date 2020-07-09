import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShopNavigation from './navigation/ShopNavigation'

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
