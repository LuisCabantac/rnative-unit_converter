import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/utils/Colors";

export default function Index() {
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
  },
});
