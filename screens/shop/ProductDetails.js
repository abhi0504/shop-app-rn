import React from 'react';
import { StyleSheet, Text, View , ScrollView , Image , Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors'
import * as cartActions from '../../store/actions/cart';

const ProductDetails = (props) => {

  const productId = props.navigation.getParam('id');
  const Allproducts = useSelector(state => state.products.availableProducts);
  const selectedProduct = Allproducts.find(item => item.id === productId);

  const dispatch = useDispatch();

  return (
    <ScrollView>
        <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
        <View style={styles.actions}>
          <Button color={Colors.primary} title="Add to Cart" onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct))
          }} />
        </View>
        <Text style={styles.price}>₹{selectedProduct.price.toFixed(2)}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
      </ScrollView>
  );
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 300
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: "bold"
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20
  }
});
