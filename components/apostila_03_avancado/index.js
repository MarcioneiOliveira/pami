import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Botao from './botao';

import styles from './styles';

export default function Apostila03a() {

  const [contador, setContador] = useState(0);

function AddNumber(){
  setContador(contador + 1);
  console.log(contador);
}

function dirNumber(){
  setContador(contador - 1);
  console.log(contador);
}

function zerNumber(){
  setContador(contador - contador);
  console.log(contador);
}

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo apostila 3</Text>
        
        <View style={styles.counter}>
          <View style={styles.horizontal}>

          <Botao sinal={'-'} funcao={dirNumber} / >

          <Text style={styles.textCounter}>{contador}</Text>

          <Botao sinal={'+'} funcao={AddNumber} / >

          </View>
        
    
      <TouchableOpacity 
        style={[styles.button, {borderRadius:30}]}
        onPress={() => zerNumber ()}
        >
        <Text style={styles.textButton}>ZERO</Text>
      </TouchableOpacity>
      
        </View>  

    </View>
  );
}
