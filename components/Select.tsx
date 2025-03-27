import { StyleSheet, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import Label from "@/components/Label";

interface IData {
  key: string;
  value: string;
}

export default function Select({
  label,
  labelColor,
  data,
  onSelectOption,
}: {
  label: string;
  labelColor?: string;
  data: IData[];
  onSelectOption: (option: string) => void;
}) {
  return (
    <View style={styles.container}>
      <Label textColor={labelColor}>{label}</Label>
      <SelectList
        setSelected={(val: string) => onSelectOption(val)}
        data={data}
        save="key"
        fontFamily="Outfit-Regular"
        search={false}
        boxStyles={styles.boxStyle}
        arrowicon={<View></View>}
        inputStyles={styles.inputStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  boxStyle: {
    borderRadius: 5,
    width: "100%",
    borderColor: "#f4f6f7",
    backgroundColor: "#f8f9fa",
    borderWidth: 2,
    marginVertical: 4,
  },
  inputStyle: {
    fontSize: 16,
    padding: 0,
    marginHorizontal: -8,
  },
});
