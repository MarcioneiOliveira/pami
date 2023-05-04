import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import apostila03 from './components/apostila_03/index';

export default function App() {
  return (
    <View style={styles.container}>
      <apostila03 />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: ConstantSourceNode.statusBarHeight,
    padding:8,
  },
});
