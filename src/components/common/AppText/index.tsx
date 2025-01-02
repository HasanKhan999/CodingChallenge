import React, { FC } from "react";
import {
  Text,
  ColorValue,
  TextProps,
  TextStyle,
  DimensionValue,
} from "react-native";
import { BLACK, normalizeFont, WHITE } from "src/theme";

interface AppTextProps extends TextProps {
  bold?: boolean;
  color?: ColorValue;
  style?: TextStyle | TextStyle[];
  fontSize?: number;
  center?: boolean;
  lineHeight?: number;
  width?: DimensionValue;
}

const AppText: FC<AppTextProps> = ({
  children,
  color = BLACK,
  bold = false,
  style,
  fontSize = 14,
  center,
  lineHeight,
  width = "auto",
  ...rest
}) => (
  <Text
    allowFontScaling={false}
    style={{
      color,
      fontSize: normalizeFont(fontSize),
      textAlign: center ? "center" : undefined,
      lineHeight: lineHeight ? lineHeight : undefined,
      width,
      fontWeight: bold ? "bold" : "normal",
      ...style,
    }}
    {...rest}>
    {children}
  </Text>
);

export default AppText;
