import { Stack } from "expo-router";

export default function MeteoLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Désactive l'en-tête global
      }}
    />
  );
}
