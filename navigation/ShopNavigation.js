import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Orders from '../screens/Orders'
import YourProducts from '../screens/YourProducts'
import ProductDetails from '../screens/ProductDetails'
import ProductsOverview from '../screens/ProductsOverview'
import AddProducts from '../screens/AddProducts'
import Cart from '../screens/Cart'


const ShopNavigation = createStackNavigator({
    Products : ProductsOverview,
    CartScreen : Cart
})

export default createAppContainer(ShopNavigation);