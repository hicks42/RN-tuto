import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar({ onSubmit }: { onSubmit: any }) {
  return (
    <View>
      <TextInput
        style={s.input}
        onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
        placeholder="Entrez une ville."
      />
    </View>
  );
}

const s = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 40,
    fontFamily: "Alata-Regular",
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
