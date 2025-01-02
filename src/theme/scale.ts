import { PixelRatio, Platform } from "react-native";
import { HEIGHT, WIDTH } from "./app";

const scale = WIDTH / 390;

export const normalizeFont = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const normalizeHeight = (size: number) => {
  return (size / 852) * HEIGHT;
};

export const normalizeWidth = (size: number) => {
  return (size / 390) * WIDTH;
};
