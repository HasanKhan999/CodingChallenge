import React, { FC } from "react";
import {
  ActivityIndicator,
  DimensionValue,
  Image,
  ImageRequireSource,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import { AppText, Spacer } from "..";
import { PRIMARY, TEXT_GRAY, WHITE, WIDTH } from "src/theme";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  style?: ViewStyle;
  type?: "primary" | "secondary";
  width?: DimensionValue;
  image?: ImageRequireSource;
  radius?: number;
}
const Button: FC<ButtonProps> = ({
  title,
  loading,
  disabled,
  style = {},
  type = "primary",
  width = WIDTH * 0.9,
  image,
  radius = 20,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: PRIMARY,
        width,
        borderRadius: radius,
        ...style,
      }}
      {...rest}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator color={WHITE} />
      ) : (
        <View style={styles.inner}>
          {image && (
            <>
              <Image source={image} style={styles.img} />
              <Spacer mh={5} />
            </>
          )}
          <AppText
            color={type === "secondary" ? TEXT_GRAY : WHITE}
            fontSize={18}>
            {title}
          </AppText>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    paddingVertical: 13,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 22.5,
    height: 22.5,
  },
});

export default Button;
