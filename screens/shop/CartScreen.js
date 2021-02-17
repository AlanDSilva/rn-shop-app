import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItem";
import * as cartActions from "../../store/actions/cart";

const CartScreen = () => {
  const cartSum = useSelector((state) => state.cart.sum);
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>€{cartSum.toFixed(2)}</Text>
        </Text>
        <Button
          color={Colors.third}
          title="Order Now"
          disabled={cartItems.length === 0}
        />
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <CartItem
            {...itemData.item}
            onRemove={() => {
              dispatch(cartActions.removeFromCart(itemData.item.id));
            }}
          />
        )}
      />
      <Text>Hello</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8, // SHADOW ONLY WORKS ON iOS
    elevation: 5, // ELEVATION ONLY WORKS ON android
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontSize: 18,
  },
  amount: {
    color: Colors.accent,
  },
});
