import React, { FC } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { BLACK } from "src/theme";

const Loading: FC = ({}) => (
  <View style={styles.container}>
    <ActivityIndicator color={BLACK} size={"large"} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Loading;
