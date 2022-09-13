import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';

const{width} =Dimensions.get('screen')
const colors =['#0052d6','#11998b','#30821b'];


export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>Happy birthday li</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
