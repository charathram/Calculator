import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { withStyles } from "@ui-kitten/components";

const Display = (props) => {
  const { eva, style, ...rest } = props;

  return (
    <View style={[style, styles.container]}>
      <Text style={[eva.style.textStyle, styles.textStyle]}>0.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 60,
    borderWidth: 1,
    borderColor: "green",
    textAlign: "right",
  },
});

export const ThemedDisplay = withStyles(Display, (theme) => ({
  textStyle: {
    color: theme["color-primary-500"],
  },
}));
