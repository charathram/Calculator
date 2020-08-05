import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Display from "./src/components/Display";
import Keys from "./src/components/Keys";

export default function App() {
  return (
    <View style={styles.container}>
      <Display style={styles.displayStyle} />
      <Keys style={styles.keysStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  keysStyle: {
    fontSize: 30,
    flex: 8,
    borderColor: "blue",
    borderWidth: 1,
  },
  displayStyle: {
    flex: 1,
    borderColor: "red",
    borderWidth: 1,
  },
});
