import { UNITS } from "@/app/TemperatureConverter/constants";

export function getOppositeUnit(unit: string) {
  return unit === UNITS.celcius ? UNITS.farenheit : UNITS.celcius;
}

export function convertTempTo(value: number, unit: string) {
  if (unit === UNITS.celcius) {
    return (value - 32) / 1.8;
  } else {
    return value * 1.8 + 32;
  }
}

export function isIced(value: number, unit: string) {
  if (unit === UNITS.celcius) {
    return value <= 0;
  } else {
    return value <= 32;
  }
}
