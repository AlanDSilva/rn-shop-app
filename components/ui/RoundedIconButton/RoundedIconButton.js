import React from "react";
import { RectButton } from "react-native-gesture-handler";

import RoundedIcon from "./RoundedIcon";

const RoundedIconButton = ({ onPress, ...props }) => {
  return (
    <RectButton {...{ onPress }}>
      <RoundedIcon {...props} />
    </RectButton>
  );
};

export default RoundedIconButton;
