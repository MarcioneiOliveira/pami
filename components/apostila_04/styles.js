import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
                     
      },
      texto: {
            fontSize: 26,
            fontWeight: 'bold',
            color: '#000',
      },
      txtSaida: {
            margin: 20, 
            fontSize: 22, 
            fontWeight: 'bold', 
            textAlign: 'center', 
            color: '#F00',     
        },
        txtCampo: {
           alignSelf: 'flex-start',
           marginLeft: 60, 
           fontSize: 20, 
           color: '#000',   
        },  
      txtEntrada: {
            borderWidth: 4, 
            textAlign: 'center', 
            fontSize: 22, 
            /*borderColor: '#B71C1C', */
            height: 40, 
            color: '#000', 
            borderRadius: 10, 
            width: '70%',
            }, 
      button: {
            backgroundColor: '#AAA', 
            height: 40, 
            justifyContent: 'center', 
            borderRadius: 10, 
            marginTop: 20, 
            width: '70%',
            }, 
      textButton: {
            fontSize: 22, 
            color: '#000', 
            textAlign: 'center', 
            
            }, 
      
});
export default styles;