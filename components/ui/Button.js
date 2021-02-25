import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const Button = ({ variant, label, onPress }) => {
  const backgroundColor = variant === "primary" ? "#2cb9b0" : "#ccc";
  const color = variant === "primary" ? "white" : "black";
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={([styles.label], { color })}>{label}</Text>
    </RectButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    textAlign: "center",
  },
});
