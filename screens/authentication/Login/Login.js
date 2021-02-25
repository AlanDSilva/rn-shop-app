import React from "react";
import { StyleSheet, Text, View, Button as RNButton } from "react-native";

import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import Form, { TextField } from "./Form";
import * as Styles from "../../../constants/Styles";
import Colors from "../../../constants/Colors";

const Login = () => {
  const footer = (
    <View style={styles.footerText}>
      <Text style={{ color: "white" }}>Don't have an account?</Text>
      <RNButton title="Sign Up Here" />
    </View>
  );
  return (
    <Container footer={footer}>
      <View
        style={{ margin: 20, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ ...Styles.text.title1 }}>Welcome Back</Text>
        <Text style={{ ...Styles.text.body }}>
          Use yout credentials below and login to your account
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TextField icon="mail" placeholder="Enter your Username" />
          <TextField icon="lock" placeholder="Enter your Password" />
        </View>
        <Button
          style={{ paddingTop: 20 }}
          label="Log into your account"
          variant="primary"
          onPress={() => {
            console.log("logs in to account");
          }}
        />
      </View>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  footerText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
