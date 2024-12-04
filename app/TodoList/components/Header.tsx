import headerLogo from "@/assets/images/logo-todolist.png";
import { Image, StyleSheet, Text } from "react-native";

export default function Header() {
  return (
    <>
      <Image
        style={s.img}
        source={headerLogo}
        // source={require("@/assets/images/logo.png")}
        resizeMode="contain"
      />
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
