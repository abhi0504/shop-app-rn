

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cart = () => {

  return (
    <View style={styles.container}>
      <Text>Hi welcome to the cart screen</Text>
    </View>
  );
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
