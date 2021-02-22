import React from "react";
import { Button, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import { ShopStack, AdminStack } from "./Stacks";
import Colors from "../constants/Colors";
import * as authActions from "../store/actions/auth";

const Drawer = createDrawerNavigator();

const AuthorizedNavigator = () => {
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
            <DrawerItem
              label="Logout"
              icon={() => (
                <MaterialIcons name="logout" size={23} color={Colors.primary} />
              )}
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
        name="My Products"
        component={AdminStack}
        options={{
          drawerIcon: () => (
            <Ionicons name="md-list" size={23} color={Colors.primary} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthorizedNavigator;
