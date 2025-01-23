import * as ImagePicker from "expo-image-picker";
// import { launchImageLibraryAsync } from "expo-image-picker";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function galerie() {
  async function pickImageAsync() {
    // let result = await launchImageLibraryAsync({
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert("Aucune image selectionnée.");
    }
  }
  return (
    <>
      <Text style={s.title}>Mes Photos</Text>
      <View style={s.body}></View>
      <View style={s.footer}></View>
      <TouchableOpacity style={s.button} onPress={pickImageAsync}>
        <Text style={s.btnTxt}>Ajouter Photo</Text>
      </TouchableOpacity>
    </>
  );
}

const s = StyleSheet.create({
  title: { fontSize: 30, paddingVertical: 10, textAlign: "center" },
  body: { flex: 6 },
  image: { height: 300, marginVertical: 30 },
  footer: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: { backgroundColor: "black", padding: 30 },
  btnTxt: { color: "white", textAlign: "center" },
});
