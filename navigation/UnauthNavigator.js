import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import { ShopStack, AuthStack } from "./Stacks";
import Colors from "../constants/Colors";
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
    name: "user",
    label: "Login",
    screen: "Login",
    backgroundColor: "orange",
  },
];

const UnauthNavigator = () => {
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
        name="Login"
        component={AuthStack}
        options={{
          drawerIcon: () => (
            <FontAwesome name="user" size={23} color={Colors.primary} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default UnauthNavigator;
