import bckgImg from "@/assets/images/usygecMobile2.jpg";
import { ImageBackground, StyleSheet } from "react-native";

export default function meteo() {
  return (
    <>
      <ImageBackground style={s.backGd} source={bckgImg}></ImageBackground>
    </>
  );
}

const s = StyleSheet.create({
  backGd: {
    flex: 1,
  },
});
