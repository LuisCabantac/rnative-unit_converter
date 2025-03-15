import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";

import { Colors } from "@/utils/Colors";

export default function Index() {
  const [loaded] = useFonts({
    "Outfit-Regular": require("../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text>Unit Converter</Text>
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
  },
});
