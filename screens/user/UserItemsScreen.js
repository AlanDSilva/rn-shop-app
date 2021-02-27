import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../constants/Colors";
import * as itemsActions from "../../store/actions/items";
import Header from "../../components/ui/Header";

const UserItemsScreen = (props) => {
  const userItems = useSelector((state) => state.items.userItems);
  const dispatch = useDispatch();

  const editItemHandler = (id) => {
    props.navigation.navigate("EditItem", { itemId: id });
  };

  return (
    <View>
      <Header
        left={{
          icon: "menu",
          onPress: () => {
            props.navigation.openDrawer();
          },
        }}
        title={"Your Items"}
        right={{
          icon: "edit",
          onPress: () => {
            props.navigation.navigate("EditItem");
          },
        }}
      />
      <View style={{ marginTop: 80 }}>
        <FlatList
          data={userItems}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <ProductItem
              {...itemData.item}
              onSelect={() => {
                editItemHandler(itemData.item.id);
              }}
            >
              <Button
                color={Colors.primary}
                title="Edit"
                onPress={() => {
                  editItemHandler(itemData.item.id);
                }}
              />
              <Button
                color={Colors.primary}
                title="Delete"
                onPress={() => {
                  console.log("Will delete item with id " + itemData.item.id);
                  dispatch(itemsActions.deleteItem(itemData.item.id));
                }}
              />
            </ProductItem>
          )}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default UserItemsScreen;

const styles = StyleSheet.create({});
