import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { withStyles } from "@ui-kitten/components";

const KeyView = (props) => {
  const { eva, style, ...rest } = props;

  return (
    <View style={[style, styles.container]}>
      <View style={styles.row}>
        <Text style={[eva.style.textStyle, styles.text]}>AC</Text>
        <Text style={[eva.style.textStyle, styles.text]}>+/-</Text>
        <Text style={[eva.style.textStyle, styles.text]}>%</Text>
        <Text style={[eva.style.textStyle, styles.text]}>DIV</Text>
      </View>
      <View style={styles.row}>
        <Text style={[eva.style.textStyle, styles.text]}>7</Text>
        <Text style={[eva.style.textStyle, styles.text]}>8</Text>
        <Text style={[eva.style.textStyle, styles.text]}>9</Text>
        <Text style={[eva.style.textStyle, styles.text]}>X</Text>
      </View>
      <View style={styles.row}>
        <Text style={[eva.style.textStyle, styles.text]}>4</Text>
        <Text style={[eva.style.textStyle, styles.text]}>5</Text>
        <Text style={[eva.style.textStyle, styles.text]}>6</Text>
        <Text style={[eva.style.textStyle, styles.text]}>-</Text>
      </View>
      <View style={styles.row}>
        <Text style={[eva.style.textStyle, styles.text]}>1</Text>
        <Text style={[eva.style.textStyle, styles.text]}>2</Text>
        <Text style={[eva.style.textStyle, styles.text]}>3</Text>
        <Text style={[eva.style.textStyle, styles.text]}>+</Text>
      </View>
      <View style={styles.row}>
        <Text
          style={[
            [eva.style.textStyle, styles.text],
            { flex: 5, marginRight: 11 },
          ]}
        >
          0
        </Text>
        <Text
          style={[
            [eva.style.textStyle, styles.text],
            { flex: 2, marginLeft: 2 },
          ]}
        >
          .
        </Text>
        <Text style={[[eva.style.textStyle, styles.text], { flex: 2 }]}>=</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: "gray",
    flex: 1,
    textAlign: "center",
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
  },
});

export const Keys = withStyles(KeyView, (theme) => ({
  textStyle: {
    color: theme["color-primary-500"],
  },
}));
