import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import HeaderButtonComponent from '../components/HeaderButton'
import Orders from '../screens/Orders'
import YourProducts from '../screens/YourProducts'
import ProductDetails from '../screens/ProductDetails'
import ProductsOverview from '../screens/ProductsOverview'
import AddProducts from '../screens/AddProducts'
import Cart from '../screens/Cart'
import Colors from '../constants/Colors'

const defaultNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
      fontWeight: 'bold'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  };

const ShopNavigation = createStackNavigator({
    Products: {
        screen: ProductsOverview
    },

    CartScreen: {
        screen: Cart
    },

    ProductDetail: {
        screen: ProductDetails
    }

} , {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
)

const OrdersNavigator = createStackNavigator(
    {
      Orders: Orders
    },
    {
      navigationOptions: {
        drawerIcon: drawerConfig => (
          <Ionicons
            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
            size={23}
            color={drawerConfig.tintColor}
          />
        )
      },
      defaultNavigationOptions: defaultNavOptions
    }
  );

const MainNavigator = createDrawerNavigator({
    products: {
        screen: ShopNavigation,
        navigationOptions: { drawerLabel: 'products' }
    },
    Orders: {
        screen: OrdersNavigator
    },
    manage : {
     screen : AddProducts
    }
},
    {
        contentOptions: {
            activeTintColor: Colors.primary,
        }
    }
)

export default createAppContainer(MainNavigator);