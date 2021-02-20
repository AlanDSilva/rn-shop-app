import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text } from "react-native";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import itemsReducer from "./store/reducers/items";
import cartReducer from "./store/reducers/cart";
import authReducer from "./store/reducers/auth";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3003/api/items")
  //     .then((result) => {
  //       console.log(result.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <Provider store={store}>
      <ShopNavigator />
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
