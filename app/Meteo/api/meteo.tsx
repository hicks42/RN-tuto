import axios from "axios";

interface Coordinates {
  lat: number;
  lng: number;
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class MeteoAPI {
  static async fetchWeatherFromCoords(coords: Coordinates) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      )
    ).data;
  }

  static async fetchCityFromCoords(
    coords: Coordinates
  ): Promise<string | null> {
    try {
      console.log("coucou:");
      await delay(2000);
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}`,
        {
          headers: {
            "User-Agent": "tuto-app/1.0 (contact@usygec.fr)",
            Referer: "http://localhost",
          },
        }
      );

      const address = response.data?.address;
      if (!address) {
        console.warn("L'adresse n'a pas été trouvée dans la réponse de l'API.");
        return null;
      }

      const { city, village, town } = address;
      return city || village || town || "Localité non trouvée";
    } catch (error) {
      console.error("Erreur lors de la récupération de la ville :", error);
      return null;
    }
  }
}
