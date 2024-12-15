import AlataRegular from "@/assets/fonts/Alata-Regular.ttf";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import Forecast from "./pages/Forecast";
import Home from "./pages/Home";

const navTheme = { colors: { background: "tranparent" } };

const Stack = createNativeStackNavigator();

export default function meteo() {
  const [isFontLoaded] = useFonts({ "Alata-Regular": AlataRegular });
  return (
    <View style={{ flex: 1 }}>
      {isFontLoaded ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
            animation: "fade",
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forecast" component={Forecast} />
        </Stack.Navigator>
      ) : null}
    </View>
  );
}

const s = StyleSheet.create({});
