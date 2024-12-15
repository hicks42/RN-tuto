import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Clock from "./Clock";
import Txt from "./Txt";

export default function MeteoBasic({
  temperature,
  city,
  interpretation,
  onPress,
}: {
  temperature: number;
  city: string;
  interpretation: any;
  onPress: any;
}) {
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>

      <Txt style={""}>{city}</Txt>

      <Txt style={s.weather_label}>{interpretation.label}</Txt>

      <View style={s.temp_box}>
        <TouchableOpacity onPress={onPress}>
          <Txt style={s.temp}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  );
}

const s = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  weather_label: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
    fontSize: 15,
  },
  image: {
    height: 90,
    width: 90,
  },
  temp_box: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  temp: { fontSize: 150 },
});
