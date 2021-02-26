import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/Colors";
import * as Styles from "../../constants/Styles";
import DrawerItem from "./DrawerItem";

const Drawer = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "green" }}>
      <View style={{ flex: 0.2, backgroundColor: "white" }}>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: Colors.accent,
            borderBottomRightRadius: Styles.radius.xl,
          }}
        ></View>
      </View>
      <View />
      <View style={{ flex: 0.8 }}>
        <View style={{ flex: 1, backgroundColor: Colors.accent }}></View>
        <View style={{ flex: 1, backgroundColor: Colors.primary }}></View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "white",
            borderTopLeftRadius: Styles.radius.xl,
            borderBottomRightRadius: Styles.radius.xl,
            padding: Styles.spacing.m,
          }}
        >
          <View style={{ alignItems: "left" }}>
            <Text style={Styles.text.title1}>Alan Da Silva</Text>
            <Text style={Styles.text.body}>@User1</Text>
          </View>

          {props.items.map((item) => (
            <DrawerItem
              key={item.screen}
              item={item}
              onPress={() => {
                props.navigation.navigate(item.screen);
              }}
            />
          ))}

          {/* <RoundedIcon
            {...items[0]}
            color={"white"}
            size={30}
            iconRatio={0.9}
          /> */}
        </View>
      </View>
      <View style={{ flex: 0.1, backgroundColor: "white" }}>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: Colors.primary,
            borderTopLeftRadius: Styles.radius.xl,
          }}
        ></View>
      </View>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
