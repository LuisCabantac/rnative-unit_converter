import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function InputBox({
  value,
  onSetValue,
}: {
  value: string;
  onSetValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      value={value ?? ""}
      onChangeText={onSetValue}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    borderColor: "#f4f6f7",
    backgroundColor: "#fafdff",
  },
});
