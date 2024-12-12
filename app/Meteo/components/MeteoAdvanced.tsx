import { StyleSheet, View } from "react-native";
import Txt from "./Txt";

export default function MeteoAdvanced({
  dawn,
  dusk,
  wind,
  windUnit,
}: {
  dawn: number;
  dusk: number;
  wind: string;
  windUnit: string;
}) {
  return (
    <View style={s.container}>
      <View style={s.sub_container}>
        <Txt style={s.titre}>{dawn} </Txt>
        <Txt style={s.ss_titre}>Aube</Txt>
      </View>
      <View style={s.sub_container}>
        <Txt style={s.titre}>{dusk}</Txt>
        <Txt style={s.ss_titre}>Crepuscule</Txt>
      </View>
      <View style={s.sub_container}>
        <Txt style={s.titre}>
          {wind} {windUnit}{" "}
        </Txt>
        <Txt style={s.ss_titre}>Vent</Txt>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "#00000050",
    borderRadius: 15,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "white",
    borderWidth: 2,
  },
  sub_container: {
    alignItems: "center",
  },
  titre: {
    fontSize: 15,
  },
  ss_titre: {
    fontSize: 10,
  },
});
