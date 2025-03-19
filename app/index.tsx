import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

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

  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
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
      <View style={styles.container}>
        <Logo />
        <View style={[styles.inputLabelContainer, { marginTop: 32 }]}>
          <Label textColor={Colors.labelSecondaryTextColor}>Select Unit</Label>
          <SelectList
            setSelected={(val: string) => setSelected(val)}
            data={data}
            save="value"
            fontFamily="Outfit-Regular"
            search={false}
            boxStyles={{
              borderRadius: 5,
              width: "100%",
              borderColor: "#f4f6f7",
              backgroundColor: "#fafdff",
              borderWidth: 2,
              marginVertical: 4,
            }}
            inputStyles={{
              fontSize: 16,
              padding: 0,
              marginHorizontal: -8,
            }}
          />
        </View>
        <View style={styles.inputLabelContainer}>
          <Label>From</Label>
          <SelectList
            setSelected={(val: string) => setSelected(val)}
            data={data}
            save="value"
            fontFamily="Outfit-Regular"
            search={false}
            boxStyles={{
              borderRadius: 5,
              width: "100%",
              borderColor: "#f4f6f7",
              backgroundColor: "#fafdff",
              borderWidth: 2,
              marginVertical: 4,
            }}
            inputStyles={{
              fontSize: 16,
              padding: 0,
              marginHorizontal: -8,
            }}
          />
        </View>
        <View style={styles.inputLabelContainer}>
          <Label>Value</Label>
          <InputBox
            value={inputValue}
            onSetValue={setInputValue}
            placeholder="Convert a value..."
          />
        </View>
        <View style={styles.inputLabelContainer}>
          <Label>To</Label>
          <SelectList
            setSelected={(val: string) => setSelected(val)}
            data={data}
            save="value"
            fontFamily="Outfit-Regular"
            search={false}
            boxStyles={{
              borderRadius: 5,
              width: "100%",
              borderColor: "#f4f6f7",
              backgroundColor: "#fafdff",
              borderWidth: 2,
              marginVertical: 4,
            }}
            inputStyles={{
              fontSize: 16,
              padding: 0,
              marginHorizontal: -8,
            }}
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
