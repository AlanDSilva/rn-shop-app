import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import RoundedIcon from "../../components/ui/RoundedIconButton/RoundedIcon";
import * as Styles from "../../constants/Styles";

const DrawerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
      >
        <RoundedIcon {...item} size={40} iconRatio={0.9} color="white" />
        <Text style={{ marginLeft: Styles.spacing.m }}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({});
