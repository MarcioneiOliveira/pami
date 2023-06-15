import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Index () {

    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [descricao, setDescricao] = useState('')

    function Calcular() {
        const valor = massa / (altura * altura);
        setResultado(valor);
        setDescricao(getDescricaoIMC(valor));

    }
    
    function getDescricaoIMC(imc) {
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso Normal';
        } else if (imc >= 25 && imc <30) {
            return 'Sobrepeso';
        } else if (imc >= 30 && imc < 35) {
            return 'Obesidade Grau 1';
        } else if (imc >= 35 && imc < 40) {
            return 'Obesidade Grau 2'
        } else {
            return 'Obesisadade Grau 3'
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}> CÁLCULO I.M.C.</Text>
            <View style={styles.entradaImc}>
            <TextInput
                placeholder='Massa'
                placeholderTextColor='lightgray'
                keyboardType='numeric'
                style={styles.input}
                onChangeText={(entrada) => setMassa(entrada)}
                />
                <TextInput
                placeholder='Altura'
                placeholderTextColor='lightgray'
                keyboardType='numeric'
                style={styles.input}
                onChangeText={(entrada) => setAltura(entrada)}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => Calcular()} >
                <Text style={styles.buttonText}> Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#EEE',
        padding: 8,
    },
    paragraph: {
        margin: 6,
        fontSize: 40,
        alignSelf: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#AAA',
    },
    entradaImc: {
        flex: 1,
        flexDirection: 'row',
    },
    input: {
        height: 80,
        textAlign: 'center',
        width: '50%',
        fontSize: 50,
        marginTop: 24,
        color: 'lightgray',
    },
    button: {
        backgroundColor: '#89FFA5',
    },
    buttonText: {
        alignSelf: 'center',
        padding: 30,
        fontSize: 25,
        color: '#6DC4A4',
        fontWeight: 'bold',
    },
    resultados: {
        alignSelf: 'center',
        color: 'lightgray',
        fontSize: 65,
        padding: 15,
    },
    descricao: {
        alignSelf: 'center',
        color: 'lightgray',
        fontSize: 30,
        padding: 15,
    },
});