import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { HeaderButtons , Item } from 'react-navigation-header-buttons';
 
import HeaderButtonComponent from '../components/HeaderButton'
import Orders from '../screens/Orders'
import YourProducts from '../screens/YourProducts'
import ProductDetails from '../screens/ProductDetails'
import ProductsOverview from '../screens/ProductsOverview'
import AddProducts from '../screens/AddProducts'
import Cart from '../screens/Cart'
import Colors from '../constants/Colors'

const ShopNavigation = createStackNavigator({
    Products : {
        screen : ProductsOverview
    },
    CartScreen : Cart,
    ProductDetail : {
        screen : ProductDetails
    }

})

const MainNavigator = createDrawerNavigator({
    products : {
        screen : ShopNavigation,
        navigationOptions: { drawerLabel: 'products' }
    },
    orders : {
        screen : Orders,
        navigationOptions: { drawerLabel: 'orders' ,
        headerRight: 
        <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
                   <Item 
                    title = "loda"
                    iconName="ios-menu"
                    onPress={() => {
                        handler();
                    }}
                     />
         </HeaderButtons>         }
    }
},
{
    contentOptions: {
        activeTintColor: Colors.primary,
      }
}
)

export default createAppContainer(MainNavigator);