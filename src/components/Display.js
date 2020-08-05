import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Display = (props) => {
  const { style, ...rest } = props;

  return (
    <View style={[style, styles.container]}>
      <Text style={styles.textStyle}>0.</Text>
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

export default Display;
