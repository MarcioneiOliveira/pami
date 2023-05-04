import {View, Text, Stylesheet} from 'react-native';

export default function Apostila03() {
    return(
        <View style={styles.container} >
            <text>
                Exemplo 3
            </text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        
    },
});