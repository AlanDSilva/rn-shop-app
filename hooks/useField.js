import { useState } from "react";
const useField = (val) => {
  const [value, setValue] = useState(val);

  const onChangeText = (text) => {
    setValue(text);
  };

  return {
    value,
    onChangeText,
  };
};

export default useField;
