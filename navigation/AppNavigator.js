import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { ShopNavigator, AuthNavigator } from "./ShopNavigator";
import StartupScreen from "../screens/StartupScreen";

// ----------------------------------------------------------------
import UnauthNavigator from "./UnauthNavigator";
import AuthorizedNavigator from "./AuthorizedNavigator";
//----------------------------------------------------------------

export default function AppNavigator(props) {
  const isAuth = useSelector((state) => !!state.auth.token);
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);

  console.log("isAuth: ", isAuth);
  console.log("didTryAutoLogin: ", didTryAutoLogin);
  return (
    <NavigationContainer>
      {/* {isAuth && <ShopNavigator />}
      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {!isAuth && !didTryAutoLogin && <StartupScreen />} */}
      {isAuth && <AuthorizedNavigator />}
      {!isAuth && didTryAutoLogin && <UnauthNavigator />}
      {!isAuth && !didTryAutoLogin && <StartupScreen />}
    </NavigationContainer>
  );
}
