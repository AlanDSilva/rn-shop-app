import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import { ShopStack, AuthStack } from "./Stacks";
import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();

const UnauthNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.primary,
        itemStyle: { marginVertical: 5 },
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
