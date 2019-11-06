import React, {Component} from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import productsReducer from './reducers/products';
import ShopNavigation from './navigation/ShopNavigation';
const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ShopNavigation />
      </Provider>
    );
  }
}
