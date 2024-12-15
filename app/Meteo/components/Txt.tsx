import { StyleSheet, Text, useWindowDimensions } from "react-native";

export default function Txt({
  children,
  style,
}: {
  children: any;
  style: any;
}) {
  const { height } = useWindowDimensions();
  const fontSize = style?.fontSize || s.txt.fontSize;
  return (
    <Text
      style={[s.txt, style, { fontSize: fontSize * (1 / height) * height }]}
    >
      {children}
    </Text>
  );
}

const s = StyleSheet.create({
  txt: { fontFamily: "Alata-regular", color: "white", fontSize: 20 },
});
