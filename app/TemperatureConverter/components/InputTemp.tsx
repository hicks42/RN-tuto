import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputTemp({
  onChangeText,
  defaultValue,
  unit,
}: {
  onChangeText: (text: string) => void;
  defaultValue: string;
  unit: string;
}) {
  return (
    <>
      <View style={s.container}>
        <TextInput
          style={s.input}
          placeholder="Entrez une temperature"
          keyboardType="number-pad"
          maxLength={4}
          defaultValue={defaultValue?.toString() || ""}
          onChangeText={onChangeText}
        ></TextInput>
        <Text style={s.unit}>{unit}</Text>
      </View>
    </>
  );
}

const s = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 50,
    paddingLeft: 20,
  },
  unit: {
    position: "absolute",
    fontSize: 35,
    alignSelf: "flex-end",
    paddingRight: 20,
  },
});
