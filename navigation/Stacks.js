import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ItemsScreen from "../screens/shop/ItemsScreen";
import ItemDetailsScreen from "../screens/shop/ItemDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import AuthScreen from "../screens/user/AuthScreen";
import UserItemsScreen from "../screens/user/UserItemsScreen";
import EditItemScreen from "../screens/user/EditItemScreen";
import HeaderButton from "../components/ui/HeaderButton";

const Stack = createStackNavigator();

export const ShopStack = () => {
  return (
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
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="md-menu"
                onPress={() => {
                  navigation.toggleDrawer();
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
  );
};

export const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Auth"
      component={AuthScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="md-menu"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        ),
      })}
    />
  </Stack.Navigator>
);

export const AdminStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="UserItems"
      component={UserItemsScreen}
      options={({ navigation }) => ({
        headerTitle: "Your Items",
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="md-menu"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        ),
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="AddItem"
              iconName="md-create"
              onPress={() => {
                navigation.navigate("EditItem");
              }}
            />
          </HeaderButtons>
        ),
      })}
    />
    <Stack.Screen
      name="EditItem"
      component={EditItemScreen}
      options={({ navigation, route }) => ({
        headerTitle: route.params?.itemId ? "Edit Item" : "Add Item",
      })}
    />
  </Stack.Navigator>
);
