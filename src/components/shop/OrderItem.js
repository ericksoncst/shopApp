/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import CartItems from '../../components/shop/CartItems';

const OrderItem = props => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View style={styles.orderItem}>
      <View style={styles.sumary}>
        <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button
        color={colors.primary}
        title={showDetails ? 'Hide Details' : 'Show Details'}
        onPress={() => setShowDetails(prevState => !prevState)}
      />
      {showDetails && (
        <View style={styles.sumaryDetails}>
          {props.items.map(cartItem => (
            <CartItems
              key={cartItem.productId}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  sumary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  sumaryDetails: { width: '100%' },
  totalAmount: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
  date: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
});

export default OrderItem;
