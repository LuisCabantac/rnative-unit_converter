import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import { Colors } from "@/utils/Colors";

import Logo from "@/components/Logo";
import Label from "@/components/Label";
import InputBox from "@/components/InputBox";
import Select from "@/components/Select";

export default function Index() {
  const [loaded] = useFonts({
    "Outfit-Regular": require("../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Mobiles" },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers" },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  useEffect(() => {
    setInputValue((value) => value.replace(/[^0-9]/g, ""));
  }, [inputValue]);

  if (!loaded) return <Text>Loading...</Text>;

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.screen}>
        <Logo />
        <View style={[styles.container, { marginTop: 32 }]}>
          <Select
            label="Select Unit"
            labelColor={Colors.labelSecondaryTextColor}
            data={data}
            onSelectOption={(option: string) => setSelected(option)}
          />
          <Select
            label="From"
            data={data}
            onSelectOption={(option: string) => setSelected(option)}
          />
          <View style={styles.inputLabelContainer}>
            <Label>Value</Label>
            <InputBox
              value={inputValue}
              onSetValue={setInputValue}
              placeholder="Convert a value..."
            />
          </View>
          <Select
            label="To"
            data={data}
            onSelectOption={(option: string) => setSelected(option)}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
    paddingVertical: 52,
    paddingHorizontal: 42,
    gap: 20,
  },
  container: {
    width: "100%",
    gap: 20,
  },
  inputLabelContainer: {
    width: "100%",
  },
});
