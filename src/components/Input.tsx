import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "../CSS/styles";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      {...rest}
    />
  );
}

export default Input;



