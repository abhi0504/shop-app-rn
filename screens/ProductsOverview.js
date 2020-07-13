import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux'

import HeaderButtonComponent from '../components/HeaderButton'
import ProductItem from '../components/ProductItem'
import Colors from '../constants/Colors'

const ProductsOverview = (props) => {

    const productsData = useSelector(state => state.shop.products)

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
            <HeaderButtons>
                <Item
                    title="cart"
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
