import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";

const ItemsScreen = (props) => {
  const products = useSelector((state) => state.items.availableItems);
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          {...itemData.item}
          onViewDetail={() => {
            props.navigation.navigate("Item Details", {
              itemId: itemData.item.id,
              itemTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

export default ItemsScreen;
