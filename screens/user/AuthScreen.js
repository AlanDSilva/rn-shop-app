import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  ScrollView,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";

import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/auth";

const AuthScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const [username, setUsername] = useState("User1");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("User1");

  const dispatch = useDispatch();

  const authHandler = async () => {
    setIsLoading(true);
    if (isSignup) {
      console.log("Will signup with ", username, name, password);
      await dispatch(authActions.signup(username, name, password));
    } else {
      console.log("Will login with ", username, password);
      await dispatch(authActions.login(username, password));
    }
    setIsLoading(false);
  };
  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.formControl}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Button
              title={isSignup ? "Signup" : "Login"}
              onPress={authHandler}
            />
          )}
          <Button
            title={isSignup ? "Switch to Sign In" : "Switch to Sign up"}
            onPress={() => {
              setIsSignup((prevState) => !prevState);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: { width: "100%" },
  label: { marginVertical: 8 },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
