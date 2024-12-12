import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { nowToHHMM } from "../services/date-service";
import Txt from "./Txt";

export default function Clock() {
  const [time, setTime] = useState(nowToHHMM());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Txt style={""}>{time}</Txt>
    </>
  );
}

const s = StyleSheet.create({});
