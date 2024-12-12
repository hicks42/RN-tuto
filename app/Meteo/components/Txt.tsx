import { StyleSheet, Text } from "react-native";

export default function Txt({
  children,
  style,
}: {
  children: any;
  style: any;
}) {
  return (
    <>
      <Text style={[s.txt, style]}>{children}</Text>
    </>
  );
}

const s = StyleSheet.create({
  txt: { fontFamily: "Alata-regular", color: "white", fontSize: 20 },
});
