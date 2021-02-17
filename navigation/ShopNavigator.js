import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Platform, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ItemsScreen from "../screens/shop/ItemsScreen";
import ItemDetailsScreen from "../screens/shop/ItemDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import HeaderButton from "../components/ui/HeaderButton";

const Stack = createStackNavigator();

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Items"
          component={ItemsScreen}
          options={({ navigation }) => ({
            headerTitle: "All items",
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Cart"
                  iconName="md-cart"
                  onPress={() => {
                    navigation.navigate("Cart");
                  }}
                />
              </HeaderButtons>
            ),
          })}
        />
        <Stack.Screen
          name="Item Details"
          component={ItemDetailsScreen}
          options={({ route }) => ({ title: route.params.itemTitle })}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;

const styles = StyleSheet.create({});
