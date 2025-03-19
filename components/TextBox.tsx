import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function TextBox({
  type,
  value,
  onSetValue,
  placeholder = "",
}: {
  type: "input" | "output";
  value: string;
  onSetValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}) {
  return (
    <TextInput
      style={[styles.box, styles[type]]}
      keyboardType="numeric"
      value={value ?? ""}
      onChangeText={onSetValue}
      placeholder={placeholder}
      aria-disabled={type === "output"}
    />
  );
}

const styles = StyleSheet.create({
  box: {
    width: "100%",
    marginVertical: 4,
    borderWidth: 2,
    padding: 12,
    borderRadius: 5,
    fontFamily: "Outfit-Regular",
    fontSize: 16,
  },
  input: {
    borderColor: "#f4f6f7",
    backgroundColor: "#fafdff",
  },
  output: {
    backgroundColor: "#f0f4f8",
    borderColor: "#0046be",
  },
});
