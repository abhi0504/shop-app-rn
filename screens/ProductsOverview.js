import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButtonComponent from '../components/HeaderButton'
import ProductItem from '../components/ProductItem'
import Colors from '../constants/Colors'
import * as cartActions from '../store/actions/shop'

const ProductsOverview = (props) => {

    const productsData = useSelector(state => state.shop.products)

    const dispatch = useDispatch();

    return (
        <FlatList
            data={productsData}
            numColumns={2}
            renderItem={itemData => (<ProductItem
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onViewDetail={() => {
                    props.navigation.navigate('ProductDetail' , { id : itemData.item.id });
                }}
                onAddToCart={() => {
                    dispatch(cartActions.addToCart(itemData.item))
                }}
                
            />)}
        />
    );
};

export default ProductsOverview;

ProductsOverview.navigationOptions = (navData) => {

    return {
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTitle: 'Shop',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
                <Item
                    title="menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
                <Item
                    title="cart"
                    color="white"
                    iconName="ios-cart"
                    onPress={() => {
                        navData.navigation.navigate("CartScreen")
                    }}
                />
            </HeaderButtons>
        )


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
