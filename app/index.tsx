import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/utils/Colors";
import { Units, UnitTypes } from "@/utils/Units";
import * as Calculations from "@/utils/Calculations";

import Logo from "@/components/Logo";
import Label from "@/components/Label";
import TextBox from "@/components/TextBox";
import Select from "@/components/Select";

export default function Index() {
  const [loaded] = useFonts({
    "Outfit-Regular": require("../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });
  const [inputValue, setInputValue] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [outputValue, setOutputValue] = useState("");

  useEffect(() => {
    setInputValue((value) => value.replace(/[^0-9]/g, ""));
  }, [inputValue]);

  useEffect(() => {
    if (selectedFrom && selectedTo && inputValue) {
      const calculationKey =
        `${selectedFrom}To${selectedTo}` as keyof typeof Calculations;
      if (typeof Calculations[calculationKey] === "function") {
        const conversionFn = Calculations[calculationKey] as (
          value: number
        ) => number;
        setOutputValue(String(conversionFn(Number(inputValue))));
      } else {
        setOutputValue("Conversion not available");
      }
    }
  }, [inputValue, selectedFrom, selectedTo]);

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
            data={UnitTypes}
            onSelectOption={(option: string) => setSelectedUnit(option)}
          />
          <Select
            label="From"
            data={Units[selectedUnit]}
            onSelectOption={(option: string) => setSelectedFrom(option)}
          />
          <View style={styles.textBoxContainer}>
            <Label>Value</Label>
            <TextBox
              type="input"
              value={inputValue}
              onSetValue={setInputValue}
              placeholder="Convert a value..."
            />
          </View>
          <Select
            label="To"
            data={Units[selectedUnit]}
            onSelectOption={(option: string) => setSelectedTo(option)}
          />
          <View style={styles.textBoxContainer}>
            <TextBox
              type="output"
              value={outputValue}
              onSetValue={setOutputValue}
              placeholder="Converted value..."
            />
          </View>
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
  textBoxContainer: {
    width: "100%",
  },
});
