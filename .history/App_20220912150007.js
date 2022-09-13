import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView } from 'react-native';

const{width} =Dimensions.get('screen');
const colors =['#A1C9F1','#F8DAE9','#30821b'];
const shapes =[
  'circle',
  'oval',
  
]


export default function App() {
  return (
    <ScrollView></ScrollView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  bgCircle1:{
    position:'absolute',
    height:width*1,
    width:width*1,
    borderRadius:width,
    left:0,
    top:0
  }
});
