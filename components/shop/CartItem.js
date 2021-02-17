import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemData}>{props.title}</Text>
      <View style={styles.itemData}>
        <Text style={styles.amount}>${props.price.toFixed(2)}</Text>
        <TouchableOpacity onPress={props.onRemove} style={styles.deleteBtn}>
          <Ionicons name="md-trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  amount: {
    fontSize: 16,
  },
  deleteBtn: {
    marginLeft: 20,
  },
});
