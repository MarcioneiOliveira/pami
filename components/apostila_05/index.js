import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

export default function Apostila05() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [total, setTotal] = useState(0);

  function Soma() {
    const conta = parseInt(n1) + parseInt(n2);
    setTotal(conta.toString());
  }

  function Subtracao() {
    const conta = parseInt(n1) - parseInt(n2);
    setTotal(conta.toString());
  }

  function Divisao() {
    const conta = parseInt(n1) / parseInt(n2);
    setTotal(conta.toString());
  }
  function Multipicar() {
    const conta = parseInt(n1) * parseInt(n2);
    setTotal(conta.toString());
  }

  return (
    <View style={styles.container}>
      {<Text style={styles.paragraph}>
				Exemplo 5
			</Text>}

      <Text style={styles.txtSaida}> Calculadora básica </Text>

      <Text style={styles.textLabell}> 1° número </Text>
      <TextInput
        style={styles.txtEntrada}
        onChangeText={(entrada) => setN1(entrada)}
        value={n1}
      />

      <Text style={styles.txtSaida}> + </Text>

      <Text style={styles.textLabel}> 2° número </Text>
      <TextInput
        style={styles.txtEntrada}
        onChangeText={(entrada) => setN2(entrada)}
        value={n2}
      />

      <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

      <Text style={styles.textLabell}> Total </Text>
      <TextInput style={styles.txtEntrada} editable={false} value={total} />
      <View style={styles.botes}>
        <TouchableOpacity style={styles.button} onPress={() => Soma()}>
          <Text style={styles.textButton}> + </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Subtracao()}>
          <Text style={styles.textButton}> - </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Divisao()}>
          <Text style={styles.textButton}> / </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Multipicar()}>
          <Text style={styles.textButton}> * </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Zerar()}>
          <Text style={styles.textButton}> Zerar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
