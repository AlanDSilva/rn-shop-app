import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cart";
import CustomCarousel from "../../components/ui/CustomCarousel";
import Header from "../../components/ui/Header";

const ItemDetailsScreen = (props) => {
  const { itemId } = props.route.params;
  const selectedItem = useSelector((state) =>
    state.items.availableItems.find((item) => item.id === itemId)
  );
  const dispatch = useDispatch();

  return (
    <View>
      <Header
        left={{
          icon: "arrow-left",
          onPress: () => {
            props.navigation.goBack();
          },
        }}
        title={selectedItem.title}
      />

      <View style={{ marginTop: 100 }}>
        <ScrollView>
          <CustomCarousel images={selectedItem.images} />
          <View style={styles.actions}>
            <Button
              color={Colors.primary}
              title="Add to Cart"
              onPress={() => {
                dispatch(cartActions.addToCart(selectedItem));
              }}
            />
          </View>

          <Text style={styles.price}>€{selectedItem.price.toFixed(2)}</Text>
          <Text style={styles.price}>{selectedItem.location}</Text>
          <Text style={styles.price}>
            {selectedItem.date.split("T").shift()} at{" "}
            {selectedItem.date.split("T").pop().split(".").shift()} by{" "}
            {selectedItem.user.username}
          </Text>
          <Text style={styles.description}>{selectedItem.description}</Text>
        </ScrollView>
      </View>
    </View>
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
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
});
