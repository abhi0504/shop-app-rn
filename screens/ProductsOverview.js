import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import PRODUCTS from '../data/dummy-data'
import HeaderButtonComponent from '../components/HeaderButton'
import ProductItem from '../components/ProductItem'
import Colors from '../constants/Colors'

const ProductsOverview = (navigation) => {

    return (
        <FlatList
            data={PRODUCTS}
            numColumns={2}
            renderItem={itemData => (<ProductItem
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
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
            </HeaderButtons>)

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
