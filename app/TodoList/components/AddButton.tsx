import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AddButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.addButton}>
      <Text style={s.txt}>+ Ajouter</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  addButton: {
    position: "absolute",
    bottom: 10,
    right: 20,
    padding: 10,
    backgroundColor: "lavender",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "lightskyblue",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  txt: {
    color: "mediumblue",
    fontWeight: "bold",
    fontSize: 18,
  },
});
