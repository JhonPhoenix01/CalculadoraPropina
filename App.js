import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';



export default function App() {
  return(
  <View style={styles.mainContainer}>

    <View style={styles.Titulo}>
      <Text>Calculadora De Propinas</Text>
    </View>

    <View style={styles.PrimeraParte}>
      <View style={styles.Contenido1}>
        <Text>Importe:</Text>
      </View>
      <View>
        <Text>No. Persona:</Text>
      </View>
      <View style={styles.BotonesPorcentaje}>
        <Text style={styles.button}>8%</Text>
        <Text style={styles.button}>10%</Text>
        <Text style={styles.button}>12.5%</Text>
        <Text style={styles.button}>15%</Text>
      </View>
      <View style={styles.SumaResta}>
        <Text>% Propina:</Text>
        <View>
          <Text>+</Text>
          <Text>-</Text>
        </View>
      </View>
    </View>

    <View style={styles.ParteMedia}>
      <View>
        <Text style={styles.button}>Calcular</Text>
      </View>
      <View>
        <Text style={styles.button}>Limpiar</Text>
      </View>
    </View>

  </View>
  
);}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 40,
  },

  Titulo:{
    flex:0,
    backgroundColor:'purple',
    padding:5,
  },

  PrimeraParte:{
    backgroundColor:'gray',
    padding:15,
    borderRadius: 10
  },

  Contenido1:{
    flex:0,
    backgroundColor:'white'
  },

  BotonesPorcentaje:{
    flex:0,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  SumaResta:{
    flex:0,
    flexDirection:'row',
    justifyContent:'space-between',
    
  },

  ParteMedia:{
    flex:0,
    flexDirection:'row',
    justifyContent:'space-around',
  },

  button:{
    borderRadius:5,
    padding:8,
    backgroundColor:'purple',
    color:'white'
  },
});
