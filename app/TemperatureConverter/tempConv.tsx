import {
  DEFAULT_TEMP,
  DEFAULT_UNIT,
} from "@/app/TemperatureConverter/constants";
import coldBkgImg from "@/assets/images/cold.png";
import hotBkgImg from "@/assets/images/hot.png";
import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import DisplayTemp from "./components/DisplayTemp";
import InputTemp from "./components/InputTemp";
import SubmitButton from "./components/SubmitButton";
import {
  convertTempTo,
  getOppositeUnit,
  isIced,
} from "./services/TemperatureConvertionService";

export default function tempConv() {
  const [inputValue, setInpuValue] = useState(DEFAULT_TEMP);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBkgImg, setCurrentBkgImg] = useState(hotBkgImg);
  const oppositeUnit = getOppositeUnit(currentUnit);

  // usEffect pour setter le BckgImg
  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isCold = isIced(inputValue, currentUnit);
      setCurrentBkgImg(isCold ? coldBkgImg : hotBkgImg);
    }
  }, [inputValue, currentUnit]);

  // convertir la inputValue pour l'afficher
  function getConvertedTemp() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTempTo(valueAsFloat, oppositeUnit).toFixed(1);
  }

  return (
    <ImageBackground style={s.container} source={currentBkgImg}>
      <View style={s.workspace}>
        <DisplayTemp value={getConvertedTemp()} unit={oppositeUnit} />
        <InputTemp
          onChangeText={setInpuValue}
          defaultValue={DEFAULT_TEMP}
          unit={currentUnit}
        />
        <SubmitButton
          onPress={() => setCurrentUnit(oppositeUnit)}
          unit={oppositeUnit}
        />
      </View>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  workspace: {
    height: 450,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
