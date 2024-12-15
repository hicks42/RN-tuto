import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Container from "../components/Container";
import ForecastListItem from "../components/ForecastListItem";
import Txt from "../components/Txt";
import { dateToDDMM, DAYS } from "../services/date-service";
import { getInterpretation } from "../services/services";
interface Params {
  time: string[];
  actualCity: string;
  weathercode: number[];
  temperature_2m_max: number[];
}
type RouteParams = {
  Forecast: Params;
};
export default function Forecast() {
  const { params } = useRoute<RouteProp<RouteParams, "Forecast">>();
  const nav = useNavigation();
  const backButton = (
    <TouchableOpacity style={s.back_button} onPress={() => nav.goBack()}>
      <Txt style={s.chevron}>{"<"}</Txt>
    </TouchableOpacity>
  );

  const header = (
    <View style={s.header}>
      {backButton}
      <View style={s.header_txt}>
        <Txt style={s.title}>{params?.actualCity}</Txt>
        <Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
      </View>
    </View>
  );
  const forecastList = (
    <View style={{ marginTop: 50 }}>
      {params &&
        params.time.map((time, index) => {
          const code = params.weathercode[index];
          const interpretation = getInterpretation(code);
          if (!interpretation) {
            console.warn(`Code météo inconnu : ${code}`);
            return null;
          }
          const img = interpretation.image;
          const date = new Date(time);
          const day = DAYS[date.getDay()];
          const temperature = params.temperature_2m_max[index].toFixed(0);

          return (
            <ForecastListItem
              key={time}
              img={img}
              day={day}
              date={dateToDDMM(date)}
              temperature={Number.parseFloat(temperature)}
            />
          );
        })}
    </View>
  );
  return (
    <Container>
      {header}
      {forecastList}
    </Container>
  );
}

const s = StyleSheet.create({
  back_button: {
    width: 30,
  },
  chevron: {
    fontWeight: "bold",
    fontSize: 30,
  },
  header: {
    flexDirection: "row",
  },
  header_txt: {
    flex: 1,
    alignItems: "center",
    marginRight: 30,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
  },
  txt: {
    fontSize: 20,
  },
});
