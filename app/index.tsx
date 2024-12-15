import currentBkgImg from "@/assets/images/usygecMobile2.jpg";
import { Link } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function index() {
  return (
    <ImageBackground style={s.container} source={currentBkgImg}>
      <View style={s.workspace}>
        <Link href="/TemperatureConverter/tempConv">
          <Text style={s.linkText}> Convertisseur de temperature.</Text>
        </Link>
        <Link href="/TodoList/todoList">
          <Text style={s.linkText}>Liste de choses a faire.</Text>
        </Link>
        <Link href="/Meteo/meteo">
          <Text style={s.linkText}>Météo.</Text>
        </Link>
      </View>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  workspace: {
    height: 250,
    justifyContent: "space-evenly",
    paddingTop: 100,
  },
  linkText: {
    color: "yellow",
    fontSize: 15,
  },
});
