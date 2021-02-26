import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ItemsScreen from "../screens/shop/ItemsScreen";
import ItemDetailsScreen from "../screens/shop/ItemDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import UserItemsScreen from "../screens/user/UserItemsScreen";
import EditItemScreen from "../screens/user/EditItemScreen";
import MapScreen from "../screens/user/MapScreen";

import Onboarding from "../screens/authentication/Onboarding/Onboarding";
import Login from "../screens/authentication/Login/Login";
import Signup from "../screens/authentication/Login/Signup";

const Stack = createStackNavigator();

export const ShopStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Items" component={ItemsScreen} />
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
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Onboarding" component={Onboarding} />
  </Stack.Navigator>
);

export const AdminStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="UserItems" component={UserItemsScreen} />
    <Stack.Screen
      name="EditItem"
      component={EditItemScreen}
      options={({ navigation, route }) => ({
        headerTitle: route.params?.itemId ? "Edit Item" : "Add Item",
      })}
    />
    <Stack.Screen name="Map" component={MapScreen} />
  </Stack.Navigator>
);
