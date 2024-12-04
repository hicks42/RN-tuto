import { StyleSheet, Text, View } from "react-native";

export default function DisplayTemp({
  value,
  unit,
}: {
  value: string;
  unit: string;
}) {
  return (
    <>
      <View>
        <Text style={s.display}>
          {value} {unit}
        </Text>
      </View>
    </>
  );
}

const s = StyleSheet.create({ display: { color: "white", fontSize: 50 } });
