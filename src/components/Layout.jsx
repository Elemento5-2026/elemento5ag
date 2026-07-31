import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "./Header";
import { COLORS } from "../utils/theme";

export default function Layout({ children }) {
  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.content}>
        {children}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    flex: 1,
    padding: 20,
  },

});
