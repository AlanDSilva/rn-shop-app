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

import Colors from "../../constants/Colors";

const ItemDetailsScreen = (props) => {
  const { itemId } = props.route.params;
  const selectedItem = useSelector((state) =>
    state.items.availableItems.find((item) => item.id === itemId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedItem.images[0] }} />
      <View style={styles.actions}>
        <Button color={Colors.primary} title="Add to Cart" onPress={() => {}} />
      </View>

      <Text style={styles.price}>€{selectedItem.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedItem.description}</Text>
    </ScrollView>
  );
};

export default ItemDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
});
