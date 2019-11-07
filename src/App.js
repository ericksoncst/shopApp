import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import orderReducer from './store/reducers/orders';
import ShopNavigation from './navigation/ShopNavigation';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer,
});

const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <ShopNavigation />
    </Provider>
  );
};

export default App;
