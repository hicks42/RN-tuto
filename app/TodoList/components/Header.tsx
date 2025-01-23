import headerLogo from "@/app/TodoList/assets/images/logo-todolist.png";
import React from "react";
import { Image, StyleSheet, Text } from "react-native";

export default function Header() {
  return (
    <>
      <Image style={s.img} source={headerLogo} resizeMode="contain" />
      <Text style={s.subtitle}>Des choses a faire ?</Text>
    </>
  );
}

const s = StyleSheet.create({
  img: {
    // height: 70,
    width: 170,
    flexShrink: 1,
  },
  subtitle: {
    marginTop: -10,
    fontSize: 20,
    color: "#ABABAB",
  },
});
