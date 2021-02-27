import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import * as Styles from "../../constants/Styles";
import Colors from "../../constants/Colors";
import Header from "./Header";

const { width } = Dimensions.get("window");
const aspectRation = 750 / 1125;
const height = width * aspectRation;
const Container = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.headerContainer}>
          <Image
            source={require("/Users/alan/localProjects/rn-shop-app/assets/patterns/backgroud_pattern.jpg")}
            style={styles.headerImage}
          />
          <Header
            left={{
              icon: "menu",
              onPress: () => {
                props.navigation.openDrawer();
              },
            }}
            title={"SignUp"}
          />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.main}
      >
        <Image
          source={require("/Users/alan/localProjects/rn-shop-app/assets/patterns/backgroud_pattern.jpg")}
          style={[{ ...StyleSheet.absoluteFillObject }, styles.headerImage]}
        />
        <View style={styles.body}>{props.children}</View>
      </KeyboardAvoidingView>
      <View style={{ height: 100, backgroundColor: Colors.accent }}>
        {props.footer}
      </View>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent,
  },
  headerContainer: {
    borderBottomLeftRadius: Styles.radius.xl,
    overflow: "hidden",
    height: height * 0.61,
  },
  headerImage: {
    width: width,
    height: height,
    borderBottomLeftRadius: Styles.radius.xl,
  },
  main: {
    flex: 1,
    borderRadius: Styles.radius.xl,
    borderTopLeftRadius: 0,
  },
  body: {
    borderRadius: Styles.radius.xl,
    borderTopLeftRadius: 0,
    backgroundColor: "white",
    flex: 1,
  },
});
