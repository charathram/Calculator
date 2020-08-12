import { StatusBar } from "expo-status-bar";
import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { ThemedDisplay } from "./src/components/Display";
import { Keys } from "./src/components/Keys";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={styles.container}>
        <ThemedDisplay style={styles.displayStyle} />
        <Keys style={styles.keysStyle} />
      </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
