import { ImageSourcePropType } from "react-native";

interface WeatherInterpretation {
  codes: number[];
  label: string;
  image: string | ImageSourcePropType;
}

export const WEATHER_INTERPRATIONS: WeatherInterpretation[] = [
  {
    codes: [0],
    label: "Ensoleillé",
    image: require("@/assets/images/meteo_img/meteo_img/sun.png"),
  },
  {
    codes: [1, 2, 3, 45, 48],
    label: "Nuageux",
    image: require("@/assets/images/meteo_img/meteo_img/clouds.png"),
  },
  {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
    label: "Pluvieux",
    image: require("@/assets/images/meteo_img/meteo_img/rain.png"),
  },
  {
    codes: [71, 73, 75, 77],
    label: "Neigeux",
    image: require("@/assets/images/meteo_img/meteo_img/snow.png"),
  },
  {
    codes: [96, 99],
    label: "Orageux",
    image: require("@/assets/images/meteo_img/meteo_img/thunder.png"),
  },
];

export function getInterpretation(
  weatherCode: number
): WeatherInterpretation | undefined {
  return WEATHER_INTERPRATIONS.find((interpretation) =>
    interpretation.codes.includes(weatherCode)
  );
}
