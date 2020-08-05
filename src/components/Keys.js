import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Keys = (props) => {
  const { style, ...rest } = props;

  return (
    <View style={[style, styles.container]}>
      <View style={styles.row}>
        <Text style={styles.text}>AC</Text>
        <Text style={styles.text}>+/-</Text>
        <Text style={styles.text}>%</Text>
        <Text style={styles.text}>DIV</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: "gray",
    flex: 1,
  },
});

export default Keys;
