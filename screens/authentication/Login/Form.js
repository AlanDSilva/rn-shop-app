import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

import Colors from "../../../constants/Colors";

export const TextField = ({ placeholder, icon }) => {
  return (
    <View
      style={{
        width: "80%",
        overflow: false,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 5,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Feather name={icon} size={24} color={Colors.primary} />
      <TextInput style={{ width: "90%", height: 48 }} {...{ placeholder }} />
    </View>
  );
};

const Form = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});
