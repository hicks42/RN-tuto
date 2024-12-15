import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import Txt from "./Txt";

export default function ForecastListItem({
  img,
  day,
  date,
  temperature,
}: {
  img: string | ImageSourcePropType;
  day: string;
  date: string;
  temperature: number;
}) {
  const imageSource = typeof img === "string" ? { uri: img } : img;
  return (
    <View style={s.list_row}>
      <Image style={s.image} source={imageSource} />
      <Txt style={s.day}>{day}</Txt>
      <Txt style={s.date}>{date}</Txt>
      <Txt style={s.temperature}>{temperature}°</Txt>
    </View>
  );
}

const s = StyleSheet.create({
  list_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    fontSize: 17,
    width: 35,
    height: 35,
  },
  day: {
    fontSize: 15,
  },
  date: {
    fontSize: 15,
    textAlign: "center",
  },
  temperature: {
    fontSize: 20,
    width: 50,
    textAlign: "right",
  },
});
