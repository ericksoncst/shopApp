import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ProductsOverview from '../screens/shop/ProductsOverview';
import colors from '../constants/colors';
import ProductDetails from '../screens/shop/ProductDetails';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverView: ProductsOverview,
    ProductDetails: ProductDetails,
  },
  {
    defaultNavigationOptions: {
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
    },
  },
);

export default createAppContainer(ProductsNavigator);
