import React , {useState , useEffect} from 'react';
import { FlatList, Text, Platform , ActivityIndicator, View , StyleSheet } from 'react-native';
import { useSelector , useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';
import * as orderActions from '../../store/actions/orders'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const OrdersScreen = props => {
  const orders = useSelector(state => state.orders.orders);

  const dispatch = useDispatch();
  const [isLoading , setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    await dispatch(orderActions.fetchOrders());
    setIsLoading(false);
  }, [dispatch]);


  return (
    isLoading ?
    <View style={styles.centered}>
       <ActivityIndicator  size="small" color={Colors.primary} />
    </View> : <FlatList
      data={orders}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    /> 
  );
};

OrdersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Orders',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default OrdersScreen;
