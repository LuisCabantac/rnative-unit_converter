import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/utils/Colors";

import Logo from "@/components/Logo";
import Label from "@/components/Label";
import InputBox from "@/components/InputBox";

export default function Index() {
  const [loaded] = useFonts({
    "Outfit-Regular": require("../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue((value) => value.replace(/[^0-9]/g, ""));
  }, [inputValue]);

  if (!loaded) return <Text>Loading...</Text>;

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Logo />
        <View style={styles.inputLabelContainer}>
          <Label>Value</Label>
          <InputBox
            value={inputValue}
            onSetValue={setInputValue}
            placeholder="Convert a value..."
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
    paddingVertical: 52,
    paddingHorizontal: 42,
    gap: 20,
  },
  inputLabelContainer: {
    width: "100%",
  },
});
