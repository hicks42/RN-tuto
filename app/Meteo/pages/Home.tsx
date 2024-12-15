import { MeteoAPI } from "@/app/Meteo/api/meteoAPI";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Container from "../components/Container";
import MeteoAdvanced from "../components/MeteoAdvanced";
import MeteoBasic from "../components/MeteoBasic";
import SearchBar from "../components/SearchBar";
import { getInterpretation } from "../services/services";

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Forecast"
>;
type RootStackParamList = {
  Forecast: { actualCity: string; [key: string]: any };
  Home: undefined;
};
interface Coordinates {
  lat: number;
  lng: number;
}

export default function Home() {
  const [coords, setCoords] = useState<Coordinates | undefined>();
  const [weather, setWeather] = useState<Record<string, any>>();
  const [actualCity, setActualCity] = useState<string | null | undefined>();
  const nav = useNavigation<NavigationProps>();
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
    setWeather(weatherResponse);
  }

  async function fetchCityName(coords: Coordinates) {
    const cityResponse = await MeteoAPI.fetchCityFromCoords(coords);
    setActualCity(cityResponse);
  }

  function goToForecastPage() {
    nav.navigate("Forecast", { actualCity, ...weather?.daily });
  }

  async function fetchCoordsByCity(inputCityName: string) {
    try {
      const coords = await MeteoAPI.fetchCoordsFromCity(inputCityName);
      setCoords(coords);
    } catch (error: any) {
      Alert.alert("Désolé !", error);
    }
  }

  return currentWeather ? (
    <Container>
      <View>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city={actualCity || "Localité inconnue"}
          interpretation={getInterpretation(currentWeather?.weathercode)}
          onPress={goToForecastPage}
        />
      </View>
      <View style={s.meteo_search}>
        <SearchBar onSubmit={fetchCoordsByCity} />
      </View>
      <View style={s.meteo_advanced}>
        <MeteoAdvanced
          dawn={weather.daily.sunrise[0].split("T")[1]}
          dusk={weather.daily.sunset[0].split("T")[1]}
          wind={currentWeather.windspeed}
          windUnit={weather.current_weather_units.windspeed}
        />
      </View>
    </Container>
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
