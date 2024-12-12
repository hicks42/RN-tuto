import { MeteoAPI } from "@/app/Meteo/api/meteo";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MeteoAdvanced from "../components/MeteoAdvanced";
import MeteoBasic from "../components/MeteoBasic";
import { getInterpretation } from "../services/services";
interface Coordinates {
  lat: number;
  lng: number;
}
export default function Home() {
  const [coords, setCoords] = useState<Coordinates | undefined>();
  const [weather, setWeather] = useState<Record<string, any>>();
  const [city, setCity] = useState<string | null | undefined>();
  const currentWeather = weather?.current_weather;

  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
      fetchCityName(coords);
    }
  }, [coords]);

  async function getUserCoords() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      let location = await Location.getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoords({
        lat: 48.85,
        lng: 2.35,
      });
    }
  }

  async function fetchWeather(coords: Coordinates) {
    const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coords);
    console.log("weatherResponse:", weatherResponse);
    setWeather(weatherResponse);
  }

  async function fetchCityName(coords: Coordinates) {
    const cityResponse = await MeteoAPI.fetchCityFromCoords(coords);
    setCity(cityResponse);
  }

  return currentWeather ? (
    <>
      <View>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city={city || "Localité inconnue"}
          interpretation={getInterpretation(currentWeather?.weathercode)}
        />
      </View>
      <View style={s.meteo_search}></View>
      <View style={s.meteo_advanced}>
        <MeteoAdvanced
          dawn={weather.daily.sunrise[0].split("T")[1]}
          dusk={weather.daily.sunset[0].split("T")[1]}
          wind={currentWeather.windspeed}
          windUnit={weather.current_weather_units.windspeed}
        />
      </View>
    </>
  ) : null;
}

const s = StyleSheet.create({
  text: {
    color: "white",
    fontFamily: "Alata-Regular",
  },
  meteo_basic: {
    flex: 2,
  },
  meteo_search: {
    flex: 2,
  },
  meteo_advanced: {
    flex: 1,
  },
});
