import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function InputBox({
  value,
  onSetValue,
  placeholder = "",
}: {
  value: string;
  onSetValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}) {
  return (
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      value={value ?? ""}
      onChangeText={onSetValue}
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    marginVertical: 4,
    borderWidth: 2,
    padding: 12,
    borderRadius: 5,
    borderColor: "#f4f6f7",
    backgroundColor: "#fafdff",
    fontFamily: "Outfit-Regular",
    fontSize: 16,
  },
});
