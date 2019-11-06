import {ADD_TO_CART} from '../store/actions/cart';
import CartItem from '../models/cart-item';

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      let updatedNewOrderCart;

      if (state.items[addedProduct.id]) {
        updatedNewOrderCart = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice,
        );
      } else {
        updatedNewOrderCart = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: {
          ...state.items,
          [addedProduct.id]: updatedNewOrderCart,
        },
        totalAmount: state.totalAmount + prodPrice,
      };
  }
  return state;
};
