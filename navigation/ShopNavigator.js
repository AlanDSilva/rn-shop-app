import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";

import ItemsScreen from "../screens/shop/ItemsScreen";

const Stack = createStackNavigator();

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Items" component={ItemsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;

const styles = StyleSheet.create({});
