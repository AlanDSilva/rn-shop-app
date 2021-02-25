import React from "react";
import { StyleSheet, Text, View } from "react-native";

import RoundedIconButton from "./RoundedIconButton/RoundedIconButton";
import RoundedIcon from "./RoundedIconButton/RoundedIcon";

const Header = ({ left, right, title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerElements}>
        <RoundedIconButton
          name={left.icon}
          size={30}
          color="black"
          iconRatio={0.9}
          onPress={left.onPress}
        />
        <Text style={{ fontSize: 28 }}>{title}</Text>
        {right ? (
          <RoundedIconButton
            name={right.icon}
            size={30}
            color="black"
            iconRatio={0.9}
            onPress={right.onPress}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    marginTop: 30,
    alignItems: "center",
    left: 0,
    top: 20,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  headerElements: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
