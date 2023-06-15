import React, { useState} from 'react';
import { View, Text } from 'react-native';


import styles from './styles';

function Apostila04 () {

      const [entrada1, setEntrada1] = useState ('');
      const [entrada2, setEntrada2] = useState ('');
      const [mensagem, setMensagem] = useState ('Inserir nome e sobrenome!');    
      const [nome] = useState ('Nome:');
      const [sobrenome] = useState ('Sobrenome:');

      function apresentaMensagem(){
            setMensagem(entrada1 +' '+ entrada2);
      }

    return (
        <View style={styles.container}>
            <Text> Exemplo 4 </Text>
                  <Text 
                        style={styles.txtSaida}
                        >
                              {mensagem}
                  </Text> 

                  <Text 
                        style={styles.txtCampo}
                        >
                              {nome}
                  </Text> 

                  <TextInput 
                        style={styles.txtEntrada}
                        onChangeText={(e) => setEntrada1(e)}
                        value={entrada1}   
                  />

                  <Text 
                        style={styles.txtCampo}
                        >
                              {sobrenome}
                  </Text>

                  <TextInput 
                        style={styles.txtEntrada}
                        onChangeText={(e) => setEntrada2(e)}
                        value={entrada2}   
                  />

                  <TouchableOpacity 
                        style={styles.button}
                        onPress = {() => apresentaMensagem()}
                              
                        >
                  <Text 
                        style={styles.textButton}
                        >
                              Exibir texto
                  </Text>
                  </TouchableOpacity>
            </View>
      );
}
export default Apostila04;