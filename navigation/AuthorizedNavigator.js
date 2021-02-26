import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import { ShopStack, AdminStack } from "./Stacks";
import Colors from "../constants/Colors";
import * as authActions from "../store/actions/auth";
import DrawerContent from "./Drawer/Drawer";

const Drawer = createDrawerNavigator();

const items = [
  {
    name: "list",
    label: "Shop",
    screen: "Shop",
    backgroundColor: Colors.primary,
  },
  {
    name: "heart",
    label: "My Products",
    screen: "My Products",
    backgroundColor: "pink",
  },
  {
    name: "log-out",
    label: "Logout",
    screen: "",
    backgroundColor: "black",
  },
];

const AuthorizedNavigator = () => {
  const dispatch = useDispatch();
  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) => (
        <DrawerContent navigation={navigation} items={items} />
      )}
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
