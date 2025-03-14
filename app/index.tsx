import { Stack } from "expo-router";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>Unit Converter</Text>
    </View>
    </>
  );
}
