import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";

const ItemsScreen = () => {
  const products = useSelector((state) => state.items.availableItems);
  console.log(products);
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <ProductItem {...itemData.item} />}
    />
  );
};

export default ItemsScreen;
