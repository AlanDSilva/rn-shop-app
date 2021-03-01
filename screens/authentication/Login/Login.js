import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button as RNButton,
  ActivityIndicator,
} from "react-native";

import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import Form, { TextField } from "./Form";
import * as Styles from "../../../constants/Styles";
import Colors from "../../../constants/Colors";

import { useDispatch } from "react-redux";
import * as authActions from "../../../store/actions/auth";
import useField from "../../../hooks/useField";

const Login = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const username = useField("");
  const password = useField("");

  const dispatch = useDispatch();

  const authHandler = async () => {
    setIsLoading(true);
    console.log("Will signup with ", username.value, password.value);
    try {
      await dispatch(authActions.login(username.value, password.value));
    } catch (err) {
      alert(err.data.error);
      setIsLoading(false);
    }
  };

  const footer = (
    <View style={styles.footerText}>
      <Text style={{ color: "white" }}>Don't have an account?</Text>
      <RNButton
        title="Sign Up Here"
        onPress={() => {
          navigation.navigate("Signup");
        }}
      />
    </View>
  );
  return (
    <Container navigation={navigation} footer={footer}>
      <View
        style={{ margin: 20, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ ...Styles.text.title1 }}>Welcome Back</Text>
        <Text style={{ ...Styles.text.body }}>
          Use yout credentials below and login to your account
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TextField
            icon="user"
            placeholder="Enter your Username"
            field={username}
          />
          <TextField
            icon="lock"
            placeholder="Enter your Password"
            field={password}
          />
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Button
            style={{ paddingTop: 20 }}
            label="Log into your account"
            variant="primary"
            onPress={authHandler}
          />
        )}
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
