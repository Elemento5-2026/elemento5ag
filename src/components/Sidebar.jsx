import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { COLORS, SHADOW } from "../utils/theme";

export default function Sidebar() {

  const menu = [
    "🏠 Dashboard",
    "📁 Incidentes",
    "🔍 Investigaciones",
    "✅ Acciones",
    "📚 Lecciones",
    "⚙ Administración",
  ];

  return (
    <View style={styles.container}>

      <View>

        <Text style={styles.logo}>
          GRUPO AG
        </Text>

        <Text style={styles.system}>
          ELEMENTO 5
        </Text>

        <Text style={styles.subtitle}>
          Gestión de Incidentes
        </Text>

      </View>

      <View style={styles.menu}>

        {menu.map((item, index) => (

          <TouchableOpacity
            key={index}
            style={styles.button}
          >

            <Text style={styles.buttonText}>
              {item}
            </Text>

          </TouchableOpacity>

        ))}

      </View>

      <View style={styles.footer}>

        <Text style={styles.user}>
          👤 Pablo Hernández
        </Text>

        <Text style={styles.version}>
          Versión 1.0
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {

    width: 270,

    backgroundColor: COLORS.primary,

    padding: 25,

    justifyContent: "space-between",

    ...SHADOW

  },

  logo: {

    color: COLORS.white,

    fontSize: 26,

    fontWeight: "bold",

  },

  system: {

    color: COLORS.white,

    marginTop: 20,

    fontSize: 22,

    fontWeight: "bold",

  },

  subtitle: {

    color: "#D6E4F0",

    marginTop: 5,

    fontSize: 15,

  },

  menu: {

    marginTop: 45,

  },

  button: {

    paddingVertical: 14,

    paddingHorizontal: 12,

    borderRadius: 10,

    marginBottom: 8,

  },

  buttonText: {

    color: COLORS.white,

    fontSize: 17,

    fontWeight: "600",

  },

  footer: {

    borderTopWidth: 1,

    borderTopColor: "rgba(255,255,255,.2)",

    paddingTop: 20,

  },

  user: {

    color: COLORS.white,

    fontSize: 15,

  },

  version: {

    color: "#D6E4F0",

    marginTop: 8,

    fontSize: 13,

  },

});
