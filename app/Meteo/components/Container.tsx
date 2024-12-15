import bckgImg from "@/assets/images/meteo-background.png";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Container({ children }) {
  return (
    <ImageBackground style={s.backGd} source={bckgImg} imageStyle={s.img}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  backGd: {
    flex: 1,
    padding: 20,
    backgroundColor: "black",
  },
  img: {
    opacity: 0.75,
  },
  container: { flex: 1 },
});
