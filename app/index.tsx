import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/utils/Colors";

import Logo from "@/components/Logo";

export default function Index() {
  const [loaded] = useFonts({
    "Outfit-Regular": require("../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });

  if (!loaded) return <Text>Loading...</Text>;

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Logo />
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
