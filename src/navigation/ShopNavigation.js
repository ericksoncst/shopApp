import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductsOverview from '../screens/shop/ProductsOverview';
import colors from '../constants/colors';
import ProductDetails from '../screens/shop/ProductDetails';
import Cart from '../screens/shop/Cart';
import Orders from '../screens/shop/Orders';

const defaulNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primary : '',
  },
  headerTitleStyle: {
    fontFamily: 'OpenSans-Bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Bold',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
};

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverView: ProductsOverview,
    ProductDetails: ProductDetails,
    Cart: Cart,
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Icon
          name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaulNavOptions,
  },
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: Orders,
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Icon
          name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaulNavOptions,
  },
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: colors.primary,
    },
  },
);

export default createAppContainer(ShopNavigator);
