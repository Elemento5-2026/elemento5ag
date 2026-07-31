import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = () => {
    console.log(usuario, password);

    // Aquí después validaremos contra la base de datos
  };

  return (
    <View style={styles.container}>

      {/* LOGO */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>GRUPO AG</Text>
      </View>

      <Text style={styles.titulo}>Elemento 5</Text>
      <Text style={styles.subtitulo}>Gestión de Incidentes</Text>

      <TextInput
        placeholder="Usuario"
        style={styles.input}
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.boton}
        onPress={iniciarSesion}
      >
        <Text style={styles.textoBoton}>
          Iniciar sesión
        </Text>
      </TouchableOpacity>

      <Text style={styles.version}>
        Versión 1.0
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#F5F6FA",
    justifyContent:"center",
    padding:30
  },

  logoContainer:{
    alignItems:"center",
    marginBottom:40
  },

  logo:{
    fontSize:32,
    fontWeight:"bold",
    color:"#003B71"
  },

  titulo:{
    fontSize:32,
    fontWeight:"bold",
    textAlign:"center",
    color:"#003B71"
  },

  subtitulo:{
    fontSize:18,
    textAlign:"center",
    marginBottom:40,
    color:"#666"
  },

  input:{
    backgroundColor:"white",
    borderRadius:10,
    padding:15,
    marginBottom:15,
    fontSize:16
  },

  boton:{
    backgroundColor:"#003B71",
    padding:18,
    borderRadius:10,
    alignItems:"center",
    marginTop:10
  },

  textoBoton:{
    color:"white",
    fontSize:18,
    fontWeight:"bold"
  },

  version:{
    textAlign:"center",
    marginTop:30,
    color:"#999"
  }

});
