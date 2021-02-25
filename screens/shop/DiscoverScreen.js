import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "../../components/ui/Header";

const DiscoverScreen = ({ navigation }) => {
  return (
    <View>
      <Header
        left={{
          icon: "menu",
          onPress: () => {
            navigation.openDrawer();
          },
        }}
        right={{
          icon: "shopping-bag",
          onPress: () => {
            navigation.navigate("Cart");
          },
        }}
        title={"Discover"}
      />
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({});
