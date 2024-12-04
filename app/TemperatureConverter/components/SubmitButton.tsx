import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function SubmitButton({
  onPress,
  unit,
}: {
  onPress: (event: GestureResponderEvent) => void;
  unit: string;
}) {
  return (
    <>
      <TouchableOpacity style={s.button} onPress={onPress}>
        <Text style={s.Text}>Convertir en {unit}</Text>
      </TouchableOpacity>
    </>
  );
}

const s = StyleSheet.create({
  button: {
    backgroundColor: "black",
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 30,
    width: 250,
  },
  Text: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
});
