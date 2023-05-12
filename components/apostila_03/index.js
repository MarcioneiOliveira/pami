import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

export default function Apostila03() {

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
      <Text style={styles.textCounter}>{contador}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => AddNumber ()}
        >
        <Text style={styles.textButton}>+1</Text>
      </TouchableOpacity>

        <TouchableOpacity 
        style={styles.button}
        onPress={() => dirNumber ()}
        >
        <Text style={styles.textButton}>-1</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => zerNumber ()}
        >
        <Text style={styles.textButton}>ZERO</Text>
      </TouchableOpacity>
    </View>
  );
}
