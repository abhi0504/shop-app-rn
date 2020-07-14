import React from 'react';
import { View, Text, Image, StyleSheet, Button , TouchableNativeFeedback } from 'react-native';

import Colors from '../constants/Colors';

const ProductItem = props => {
  return (
    <View style={styles.product}>
      <View style={styles.mainContainers}>
    <TouchableNativeFeedback onPress={props.onViewDetail} useForeground>
      <View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>₹{props.price.toFixed(2)} INR</Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.button}>
          <Button
          color={Colors.primary}
          title="View Details"
          onPress={props.onViewDetail}
        />
        </View>
        <View style={styles.button}>
          <Button
          color={Colors.primary}
          title="To Cart"
          onPress={props.onAddToCart}
        />
        </View> 
      </View>
    </View>
    </TouchableNativeFeedback>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    width: 185,
    margin: 5
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10
  },
  title: {
    fontSize: 18,
    marginVertical: 4
  },
  price: {
    fontSize: 14,
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20
  },
  mainContainer: {
    borderRadius: 10,
    overflow: "hidden"
  },
  button: {
    margin: 5
  }
});

export default ProductItem;
