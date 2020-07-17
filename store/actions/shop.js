import CartItem from "../../components/CartItem";

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SAVE_TO_CART = 'SAVE_TO_CART';


export const addToCart = product => {
  return { type: ADD_TO_CART, product: product };
};

export const removeFromCart = productId => {
  return { type: REMOVE_FROM_CART, pid: productId };
};

export const saveOrder = ( cartItems , totalAmount ) => {
  return { 
    type: SAVE_TO_CART, 
    orderData: { items: cartItems, amount: totalAmount }
   };
}