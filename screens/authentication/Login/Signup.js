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

const Signup = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const username = useField("");
  const name = useField("");
  const password = useField("");

  const authHandler = async () => {
    setIsLoading(true);
    console.log(
      "Will signup with ",
      username.value,
      name.value,
      password.value
    );
    try {
      await dispatch(
        authActions.signup(username.value, name.value, password.value)
      );
    } catch (err) {
      alert(err.data.error);
      setIsLoading(true);
    }
  };

  const dispatch = useDispatch();
  const footer = (
    <View style={styles.footerText}>
      <Text style={{ color: "white" }}>Already have an account?</Text>
      <RNButton
        title="Sign In Here"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
  return (
    <Container navigation={navigation} footer={footer}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
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
          <TextField icon="edit-2" placeholder="Enter your Name" field={name} />
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
            label="Sing up your account"
            variant="primary"
            onPress={authHandler}
          />
        )}
      </View>
    </Container>
  );
};

export default Signup;

const styles = StyleSheet.create({
  footerText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
