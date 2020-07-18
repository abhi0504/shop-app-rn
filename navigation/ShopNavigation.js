import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import HeaderButtonComponent from '../components/HeaderButton'
import Orders from '../screens/shop/Orders'
import UserProductScreen from '../screens/user/UserProductScreen'
import ProductDetails from '../screens/shop/ProductDetails'
import ProductsOverview from '../screens/shop/ProductsOverview'
import EditProductScreen from '../screens/user/EditProductScreen'
import Cart from '../screens/shop/Cart'
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

  const AdminNavigator = createStackNavigator(
    {
      UserProducts: UserProductScreen
    },
    {
      navigationOptions: {
        drawerIcon: drawerConfig => (
          <Ionicons
            name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
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
    Admin : {
     screen : AdminNavigator
    }
},
    {
        contentOptions: {
            activeTintColor: Colors.primary,
        }
    }
)

export default createAppContainer(MainNavigator);