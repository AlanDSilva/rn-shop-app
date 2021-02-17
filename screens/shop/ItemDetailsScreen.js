import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { useSelector } from "react-redux";

const ItemDetailsScreen = (props) => {
  const { itemId } = props.route.params;
  const selectedItem = useSelector((state) =>
    state.items.availableItems.find((item) => item.id === itemId)
  );

  return (
    <View>
      <Text>{selectedItem.title}</Text>
    </View>
  );
};

export default ItemDetailsScreen;

const styles = StyleSheet.create({});
