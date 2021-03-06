import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import Onboarding from "../screens/authentication/Onboarding/Onboarding";

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
      {isAuth && <AuthorizedNavigator />}
      {!isAuth && didTryAutoLogin && <UnauthNavigator />}
      {!isAuth && !didTryAutoLogin && <Onboarding />}
    </NavigationContainer>
  );
}
