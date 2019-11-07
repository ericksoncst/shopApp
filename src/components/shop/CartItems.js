/* eslint-disable no-use-before-define */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CartItems = props => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemData}>
        <Text style={styles.quantity}>
          {`${props.quantity} `}
          <Text style={styles.mainText}>{props.title}</Text>
        </Text>
      </Text>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>{props.amount.toFixed(2)}</Text>
        {props.deletable && (
          <TouchableOpacity
            style={styles.removeButton}
            onPress={props.onRemove}
          >
            <Icon
              name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
              size={23}
              color="red"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  itemData: { flexDirection: 'row', alignItems: 'center' },
  quantity: {
    fontFamily: 'OpenSans-Regular',
    color: '#888',
    fontSize: 16,
  },
  mainText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
  removeButton: { marginLeft: 20 },
});

export default CartItems;
