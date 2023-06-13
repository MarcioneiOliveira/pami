import React, { useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Index () {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);
  
    function Soma() {
      const conta = parseInt(n1) + parseInt(n2);
      setTotal(conta.toString());
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Exemplo 5
            </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.textLabel}> 1° número</Text>
            <TextInput style={styles.txtEntrada} onChangeText={ (entrada) => setN1(entrada) }/>

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.textLabel}> 2° número</Text>
            <TextInput style={styles.txtEntrada} onChangeText={ (entrada) => setN2(entrada) }/>
            
            <Text style={[styles.txtSaida, {margin: 0 }]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <TextInput style={styles.txtEntrada} editable={false} value={total} />

            <TouchableOpacity style={ styles.button} onPress={() => Soma ()}>
                <Text style={styles.textButton}> + </Text>
            </TouchableOpacity>

        </View>
    );
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FF80AB',
        padding: 8,
    },
    paragraph: {
        margin: 6,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#C51162',
    },
});