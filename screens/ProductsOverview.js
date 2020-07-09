import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons , Item } from 'react-navigation-header-buttons';

import HeaderButtonComponent from '../components/HeaderButton'

const ProductsOverview = (navigation) => {

  return (
    <View style={styles.container}>
      <Text>5</Text>
    </View>
  );
}

export default ProductsOverview;

ProductsOverview.navigationOptions = (navData) => {

    return {
        headerTitle: 'Shop',
        headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
            <Item 
             title = "menu"
             iconName="ios-menu"
             onPress={() => {
                navData.navigation.toggleDrawer();
             }}
              />
  </HeaderButtons>   )
             
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
