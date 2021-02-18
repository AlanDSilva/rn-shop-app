import React, { useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import * as itemsActions from "../../store/actions/items";

import Colors from "../../constants/Colors";

const ItemsScreen = (props) => {
  const products = useSelector((state) => state.items.availableItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemsActions.fetchItems());
  }, [dispatch]);

  const selectItemHandler = (id, title) => {
    props.navigation.navigate("Item Details", {
      itemId: id,
      itemTitle: title,
    });
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          {...itemData.item}
          onSelect={() => {
            selectItemHandler(itemData.item.id, itemData.item.title);
          }}
        >
          <Button
            color={Colors.primary}
            title="View Iem"
            onPress={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
          />
          <Button
            color={Colors.primary}
            title="ToCart"
            onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

export default ItemsScreen;
