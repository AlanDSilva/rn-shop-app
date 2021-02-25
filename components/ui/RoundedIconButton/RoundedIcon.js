import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Feather } from "@expo/vector-icons";

const RoundedIcon = ({ name, size, color, backgroundColor, iconRatio }) => {
  const iconSize = size * iconRatio;
  return (
    <View
      style={{
        height: iconSize + 5,
        width: iconSize + 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: size / 2,
        ...{ backgroundColor },
      }}
    >
      <Text style={{ width: iconSize, height: iconSize }}>
        <Feather {...{ name }} size={iconSize} {...{ color }} />
      </Text>
    </View>
  );
};

export default RoundedIcon;

const styles = StyleSheet.create({});
