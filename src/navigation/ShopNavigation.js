import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ProductsOverview from '../screens/shop/ProductsOverview';
import colors from '../constants/colors';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverView: ProductsOverview,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '' : colors.primary,
      },
      headerTintColor: Platform.OS === 'android' ? colors.primary : 'white',
    },
  },
);

export default createAppContainer(ProductsNavigator);
