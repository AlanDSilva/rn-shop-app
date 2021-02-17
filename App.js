import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import itemsReducer from "./store/reducers/items";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  items: itemsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
      <Text>Hello world!</Text>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
