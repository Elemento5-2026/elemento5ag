import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import Layout from "../../components/Layout";
import { COLORS, SHADOW } from "../../utils/theme";

export default function NuevoIncidente() {

  const [descripcion, setDescripcion] = useState("");

  return (

    <Layout>

      <ScrollView>

        <Text style={styles.title}>
          Nuevo Incidente
        </Text>

        <Text style={styles.subtitle}>
          Complete la información general del incidente.
        </Text>

        <View style={styles.card}>

          <Text style={styles.label}>
            Planta
          </Text>

          <TextInput
            placeholder="Seleccione una planta"
            style={styles.input}
          />

          <Text style={styles.label}>
            Área
          </Text>

          <TextInput
            placeholder="Seleccione un área"
            style={styles.input}
          />

          <Text style={styles.label}>
            Fecha
          </Text>

          <TextInput
            placeholder="31/07/2026"
            style={styles.input}
          />

          <Text style={styles.label}>
            Hora
          </Text>

          <TextInput
            placeholder="08:35"
            style={styles.input}
          />

          <Text style={styles.label}>
            Tipo de incidente
          </Text>

          <TextInput
            placeholder="CPT / Potencial A / SPT / PA / CMD"
            style={styles.input}
          />

          <Text style={styles.label}>
            Descripción
          </Text>

          <TextInput
            multiline
            numberOfLines={5}
            style={styles.textArea}
            placeholder="Describa brevemente el incidente..."
            value={descripcion}
            onChangeText={setDescripcion}
          />

          <TouchableOpacity style={styles.button}>

            <Text style={styles.buttonText}>
              Guardar Incidente
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </Layout>

  );

}

const styles = StyleSheet.create({

  title:{
    fontSize:30,
    fontWeight:"bold",
    color:COLORS.text
  },

  subtitle:{
    marginTop:5,
    marginBottom:20,
    color:COLORS.textLight,
    fontSize:16
  },

  card:{
    backgroundColor:COLORS.white,
    borderRadius:12,
    padding:20,
    ...SHADOW
  },

  label:{
    marginTop:15,
    marginBottom:6,
    fontWeight:"bold",
    color:COLORS.text
  },

  input:{
    backgroundColor:"#F7F8FA",
    borderWidth:1,
    borderColor:"#DDD",
    borderRadius:10,
    padding:12
  },

  textArea:{
    backgroundColor:"#F7F8FA",
    borderWidth:1,
    borderColor:"#DDD",
    borderRadius:10,
    padding:12,
    height:120,
    textAlignVertical:"top"
  },

  button:{
    backgroundColor:COLORS.primary,
    marginTop:30,
    padding:18,
    borderRadius:10,
    alignItems:"center"
  },

  buttonText:{
    color:"white",
    fontWeight:"bold",
    fontSize:18
  }

});
