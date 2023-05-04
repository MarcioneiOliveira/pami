import * as React from 'react';
import {View, Text, Stylesheet} from 'react-native';

export default function Index() {
    return(
        <View style={styles.container} >
            <text style={styles.paragraph}>
                Exemplo 3
            </text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#9E9E9E',
    },
});