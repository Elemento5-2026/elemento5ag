import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { COLORS, SHADOW } from "../../../utils/theme";

export default function NuevoIncidente() {

  const [descripcion, setDescripcion] = useState("");

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Nuevo Incidente
      </Text>

      <Text style={styles.subtitle}>
        Registro inicial del incidente
      </Text>

      {/* INFORMACIÓN GENERAL */}

      <View style={styles.card}>

        <Text style={styles.section}>
          Información General
        </Text>

        <Text style={styles.label}>Planta</Text>
        <TextInput
          placeholder="Seleccione la planta"
          style={styles.input}
        />

        <Text style={styles.label}>Área</Text>
        <TextInput
          placeholder="Seleccione el área"
          style={styles.input}
        />

        <Text style={styles.label}>Proceso</Text>
        <TextInput
          placeholder="Proceso"
          style={styles.input}
        />

        <Text style={styles.label}>Máquina (Opcional)</Text>
        <TextInput
          placeholder="Máquina"
          style={styles.input}
        />

        <View style={styles.row}>

          <View style={styles.half}>

            <Text style={styles.label}>Fecha</Text>

            <TextInput
              placeholder="31/07/2026"
              style={styles.input}
            />

          </View>

          <View style={styles.half}>

            <Text style={styles.label}>Hora</Text>

            <TextInput
              placeholder="08:30"
              style={styles.input}
            />

          </View>

        </View>

        <Text style={styles.label}>Reportado por</Text>

        <TextInput
          placeholder="Nombre del colaborador"
          style={styles.input}
        />

      </View>

      {/* CLASIFICACIÓN */}

      <View style={styles.card}>

        <Text style={styles.section}>
          Clasificación
        </Text>

        <TouchableOpacity style={styles.option}>
          <Text>CPT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text>Potencial A</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text>SPT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text>PA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text>CMD</Text>
        </TouchableOpacity>

      </View>

      {/* DESCRIPCIÓN */}

      <View style={styles.card}>

        <Text style={styles.section}>
          Descripción del incidente
        </Text>

        <TextInput
          multiline
          numberOfLines={6}
          placeholder="Describa brevemente lo ocurrido..."
          value={descripcion}
          onChangeText={setDescripcion}
          style={styles.textArea}
        />

      </View>

      {/* EVIDENCIAS */}

      <View style={styles.card}>

        <Text style={styles.section}>
          Evidencias
        </Text>

        <TouchableOpacity style={styles.photoButton}>

          <Text style={styles.photoText}>
            📷 Agregar fotografías
          </Text>

        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.saveButton}>

        <Text style={styles.saveText}>
          Guardar Incidente
        </Text>

      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  container:{
    paddingBottom:40
  },

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
    marginBottom:20,
    ...SHADOW
  },

  section:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:15,
    color:COLORS.primary
  },

  label:{
    marginBottom:5,
    marginTop:12,
    fontWeight:"600",
    color:COLORS.text
  },

  input:{
    backgroundColor:"#F7F8FA",
    borderWidth:1,
    borderColor:"#DDD",
    borderRadius:8,
    padding:12
  },

  row:{
    flexDirection:"row",
    justifyContent:"space-between"
  },

  half:{
    width:"48%"
  },

  option:{
    borderWidth:1,
    borderColor:"#DDD",
    borderRadius:8,
    padding:14,
    marginBottom:10
  },

  textArea:{
    backgroundColor:"#F7F8FA",
    borderWidth:1,
    borderColor:"#DDD",
    borderRadius:8,
    padding:12,
    height:130,
    textAlignVertical:"top"
  },

  photoButton:{
    backgroundColor:"#EEF5FC",
    borderRadius:8,
    padding:18,
    alignItems:"center"
  },

  photoText:{
    color:COLORS.primary,
    fontWeight:"bold"
  },

  saveButton:{
    backgroundColor:COLORS.primary,
    padding:18,
    borderRadius:10,
    alignItems:"center"
  },

  saveText:{
    color:"white",
    fontSize:18,
    fontWeight:"bold"
  }

});
