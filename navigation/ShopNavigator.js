import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Platform, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import ItemsScreen from "../screens/shop/ItemsScreen";
import ItemDetailsScreen from "../screens/shop/ItemDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import UserItemsScreen from "../screens/user/UserItemsScreen";
import EditItemScreen from "../screens/user/EditItemScreen";
import * as authActions from "../store/actions/auth";
import HeaderButton from "../components/ui/HeaderButton";
import Colors from "../constants/Colors";

import { useSelector, useDispatch } from "react-redux";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ShopStack = () => (
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

const OrderStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Orders"
      component={OrdersScreen}
      options={({ navigation }) => ({
        headerTitle: "Your Orders",
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

const UserStack = () => (
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

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ShopNavigator = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.primary,
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <Button
              title="Logout"
              color={Colors.primary}
              onPress={() => {
                dispatch(authActions.logout());
              }}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="Shop"
        component={ShopStack}
        options={{
          drawerIcon: () => (
            <Ionicons name="md-cart" size={23} color={Colors.primary} />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrderStack}
        options={{
          drawerIcon: () => (
            <Ionicons name="md-list" size={23} color={Colors.primary} />
          ),
        }}
      />
      <Drawer.Screen
        name="Admin"
        component={UserStack}
        options={{
          drawerIcon: () => (
            <Ionicons name="md-create" size={23} color={Colors.primary} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});
