import AlataRegular from "@/assets/fonts/Alata-Regular.ttf";
import bckgImg from "@/assets/images/meteo-background.png";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./pages/Home";

const navTheme = { colors: { background: "tranparent" } };

const Stack = createNativeStackNavigator();

export default function meteo() {
  const [isFontLoaded] = useFonts({ "Alata-Regular": AlataRegular });
  return (
    <ImageBackground style={s.backGd} source={bckgImg} imageStyle={s.img}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {isFontLoaded ? (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: "transparent" },
              }}
              initialRouteName="Home"
            >
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          ) : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  backGd: {
    flex: 1,
    padding: 20,
    backgroundColor: "black",
  },
  img: {
    opacity: 0.75,
  },
  container: { flex: 1 },
});
