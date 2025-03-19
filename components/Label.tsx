import { StyleSheet, Text } from "react-native";

export default function Label({
  children,
  textColor = "",
}: {
  children: string;
  textColor?: string;
}) {
  return <Text style={styles(textColor).label}>{children}</Text>;
}

const styles = (textColor: string) =>
  StyleSheet.create({
    label: {
      textAlign: "left",
      width: "100%",
      fontFamily: "Outfit-Regular",
      fontWeight: 600,
      fontSize: 16,
      color: textColor,
      textTransform: "uppercase",
    },
  });
