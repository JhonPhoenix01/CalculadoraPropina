import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { TextButton } from './componentes/TextButton';
import { Stepper } from './componentes/Stepper';
import PercentageButton from './componentes/PercentageButton';
import { StatusBar } from 'expo-status-bar';
import Resultado from './componentes/Resultado';

export default function App() {
const [importe,setImporte] = useState('');
const [personas,setPersonas] = useState('');
const [propina,setPropina] = useState('');



function importeTextInputHandler (enteredText){
  setImporte(enteredText);
}
function personasTextInputHandler (enteredText){
  setPersonas(enteredText);
}
function propinaTextInputHandler (enteredText){
  setPropina(enteredText);
}

function onCalcularButtonTapped(){
  console.log('Importe: ' + importe)
  console.log('Numero de personas: ' + personas)
  console.log('% de propina: ' + propina)
  
  Number.parseFloat(importe);
  Number.parseInt(personas);
  Number.parseFloat(propina);

  const total= (importe+personas+propina);
  console.log (total)
}


  return(
  <View style={styles.mainContainer}>

    <View style={styles.Titulo}>
      <Text>Calculadora De Propinas</Text>
    </View>

    <View style={styles.PrimeraParte}>

      <View style={styles.Contenido1}>
        <Text>Importe:</Text>
          <TextInput
          style = {styles.Contenido1}
          onChangeText={importeTextInputHandler}
          value={importe}
          placeholder='Ingresa el importe'/>
      </View>
      
      <View style={styles.SumaResta}>
        <Text>No. Persona:</Text>
        <TextInput
          style = {styles.Contenido1}
          onChangeText={personasTextInputHandler}
          value={personas}
          placeholder='Ingresa la cantidad de personas'/>
        <Stepper/>
      </View>
      
      {/* <View style={styles.BotonesPorcentaje}>
        <Text style={styles.button}>8%</Text>
        <Text style={styles.button}>10%</Text>
        <Text style={styles.button}>12.5%</Text>
        <Text style={styles.button}>15%</Text>
      </View> */}

      <View style={styles.BotonesPorcentaje}>
        <TextButton 
        title="8%" 
        buttonStyle={styles.percentageButtonStyle}/>
        <TextButton 
        title="10%" 
        buttonStyle={styles.percentageButtonStyle}/>
        <TextButton 
        title="12.5%" 
        buttonStyle={styles.percentageButtonStyle}/>
        <TextButton 
        title="15%" 
        buttonStyle={styles.percentageButtonStyle}/>
      </View>

      <View style={styles.SumaResta}>
        <Text>% Propina:</Text>
        <TextInput
          style = {styles.Contenido1}
          onChangeText={propinaTextInputHandler}
          value={propina}
          placeholder='Ingresa el % de propina'/>
        <Stepper />
      </View>
    </View>

    <View style={styles.commandContainer}>
      <TextButton 

        title='Calcular'
        onPress={onCalcularButtonTapped}

        buttonStyle={{backgroundColor:'blue', borderColor:'blue'}}
        textStyle={{color:'yellow'}}/>
        
      <TextButton title='Limpiar'/>
    </View>


    <View style={styles.resultContainer}>
        <Resultado
        descripcion="Importe de la propina"
        valor="156.25"/>
        <Resultado
        descripcion="Propina por persona"
        valor="39.06"/>
        <Resultado
        descripcion="Importe total"
        valor="1406.25"/>
        <Resultado
        descripcion="importe por persona"
        valor="351.56"/>
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
    padding:10,
    justifyContent:'center',
    marginBottom:10,
    borderRadius:5
  },

  PrimeraParte:{
    backgroundColor:'gray',
    padding:15,
    borderRadius: 10
  },

  Contenido1:{
    flex:0,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20
  },

  BotonesPorcentaje:{
    flex:0,
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:20
  },
  SumaResta:{
    flex:0,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20
  },

  button:{
    borderRadius:5,
    padding:8,
    backgroundColor:'purple',
    color:'white'   
  },
  commandContainer:{
    flexDirection: 'row',
    marginVertical:32,
    justifyContent:'space-evenly',
    gap:32
  },
  percentageButtonStyle:{
    minWidth:70,
    alignItems:'center'
},
resultContainer:{
  backgroundColor:'lightgray',
  borderColor:'black',
  borderWidth:2,
  borderRadius:5,
  padding:8,
},
});
