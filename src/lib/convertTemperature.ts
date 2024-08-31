export default function convertTemperature(temp: number, isCelsius: boolean) {
  const convertedTemp = isCelsius ? temp : (temp * 9) / 5 + 32;
  return convertedTemp.toFixed(1);
}
