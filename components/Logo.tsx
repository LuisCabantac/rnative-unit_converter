import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/utils/Colors";

export default function Logo() {
  return (
    <View>
      <View style={styles.dotContainer}>
        <Text style={styles.text}>Unit</Text>
        <Text style={styles.logoDot}>o</Text>
      </View>
      <Text style={styles.text}>Converter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.logoTextColor,
    fontSize: 32,
    fontFamily: "Outfit-Bold",
  },
  dotContainer: {
    position: "relative",
  },
  logoDot: {
    position: "absolute",
    top: -9,
    left: 13,
    color: Colors.logoTextColor,
    fontFamily: "Outfit-Bold",
    fontSize: 16,
  },
});
