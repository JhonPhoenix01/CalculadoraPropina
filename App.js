import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { TextButton } from './componentes/TextButton';
import { Stepper } from './componentes/Stepper';
import PercentageButton from './componentes/PercentageButton';
import { StatusBar } from 'expo-status-bar';
import Resultado from './componentes/Resultado';

export default function App() {
const [importe,setImporte] = useState('');
const [personas,setPersonas] = useState('1');
const [propina,setPropina] = useState('10');

const [cargoTip, setCargoTip] =useState('');
const [tipPerson, setTipPerson] = useState('');
const [totalAmount, setTotalAmount] = useState('');
const [amountPerson, setAmountPerson] = useState('');


function onLimpiarButtonTaped(){
  setImporte('');
  setPersonas('');
  setPropina('');

  setCargoTip('');
  setTipPerson('');
  setTotalAmount('');
  setAmountPerson('');
}


function importeTextInputHandler (enteredText){
  setImporte(enteredText);
}
function personasTextInputHandler (enteredText){
  setPersonas(enteredText);
}
function propinaTextInputHandler (enteredText){
  setPropina(enteredText);
}

function OnPercentageButtonTapped (percentage){
  setPropina(percentage);
}

function onCalcularButtonTapped(){
  console.log('Importe: ' + importe)
  console.log('Numero de personas: ' + personas)
  console.log('% de propina: ' + propina)
  
  const Import = parseFloat(importe);
  const Persons = parseInt(personas);
  const Propin = parseFloat(propina);

  const ImportePropina = Import * (Propin/100);
  const ImporteTotal = Import + ImportePropina;
  const PropinaXPersona = ImportePropina / Persons;
  const ImporteXPersona = ImporteTotal / Persons;

  const formatoMoneda = new Intl.NumberFormat('es-MX', {
    style:'currency',
    currency:'MXN'
  });

  setCargoTip(formatoMoneda.format(ImportePropina));
  setTipPerson(formatoMoneda.format(PropinaXPersona));
  setTotalAmount(formatoMoneda.format(ImporteTotal));
  setAmountPerson(formatoMoneda.format(ImporteXPersona));

  const total= (Import+Persons+Propin);
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
          value={personas.toString()}
          keyboardType='decimal-pad'
          placeholder='Ingresa la cantidad de personas'/>
        <Stepper
          minValue="1"
          maxValue="10"
          value={personas}
          onChange={(newValue) => setPersonas(newValue)}
        />
      </View>
      
      {/* <View style={styles.BotonesPorcentaje}>
        <Text style={styles.button}>8%</Text>
        <Text style={styles.button}>10%</Text>
        <Text style={styles.button}>12.5%</Text>
        <Text style={styles.button}>15%</Text>
      </View> */}

      <View style={styles.BotonesPorcentaje}>
        <PercentageButton
        percentage="8" 
        onPress={OnPercentageButtonTapped}
        buttonStyle={styles.percentageButtonStyle}/>
        <PercentageButton
        percentage="10" 
        onPress={OnPercentageButtonTapped}
        buttonStyle={styles.percentageButtonStyle}/>
        <PercentageButton
        percentage="12.5" 
        onPress={OnPercentageButtonTapped}
        buttonStyle={styles.percentageButtonStyle}/>
        <PercentageButton
        percentage="15" 
        onPress={OnPercentageButtonTapped}
        buttonStyle={styles.percentageButtonStyle}/>
      </View>

      <View style={styles.SumaResta}>
        <Text>% Propina:</Text>
        <TextInput
          style = {styles.Contenido1}
          onChangeText={propinaTextInputHandler}
          value={propina.toString()}
          keyboardType='decimal-pad'
          placeholder='Ingresa el % de propina'/>
        <Stepper 
      
        maxValue="20"
        value={propina}
        onChange={(newValue) => setPropina(newValue)}
        />
      </View>

    </View>

    <View style={styles.commandContainer}>
      <TextButton 
        title='Calcular'
        onPress={onCalcularButtonTapped}
        buttonStyle={{backgroundColor:'blue', borderColor:'blue'}}
        textStyle={{color:'yellow'}}/>
      
      <TextButton title='Limpiar'
      onPress={onLimpiarButtonTaped}/>
    </View>


    <View style={styles.resultContainer}>
        <Resultado
        descripcion="Importe de la propina"
        valor={cargoTip}/>
        <Resultado
        descripcion="Propina por persona"
        valor={tipPerson}/>
        <Resultado
        descripcion="Importe total"
        valor={totalAmount}/>
        <Resultado
        descripcion="importe por persona"
        valor={amountPerson}/>
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
resultContainer:{
  backgroundColor:'lightgray',
  borderColor:'black',
  borderWidth:2,
  borderRadius:5,
  padding:8,
},
});
