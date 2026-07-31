import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOW } from "../utils/theme";

export default function Header() {
  return (
    <View style={styles.container}>

      {/* Logo y nombre */}
      <View>
        <Text style={styles.logo}>GRUPO AG</Text>
        <Text style={styles.title}>Elemento 5</Text>
        <Text style={styles.subtitle}>Gestión de Incidentes</Text>
      </View>

      {/* Usuario */}
      <View style={styles.userContainer}>
        <Text style={styles.user}>👤 Pablo Hernández</Text>
        <Text style={styles.date}>31 Jul 2026</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: COLORS.primary,

    paddingHorizontal: 25,
    paddingVertical: 22,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    ...SHADOW,
  },

  logo: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  title: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 6,
  },

  subtitle: {
    color: "#DCE7F3",
    fontSize: 16,
    marginTop: 3,
  },

  userContainer: {
    alignItems: "flex-end",
  },

  user: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },

  date: {
    color: "#DCE7F3",
    marginTop: 6,
    fontSize: 14,
  },

});
