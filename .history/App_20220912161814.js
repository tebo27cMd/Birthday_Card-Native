import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, ImageBackground, View, Dimensions, ScrollView } from 'react-native';
import bd from './assets/birth.png';
const { width } = Dimensions.get('screen');
const colors = ['#A1C9F1', '#F8DAE9', '#30821b'];


export default function App() {
  return (<ScrollView>

  </ScrollView>
   
      



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  bgCircle1: {
    position: 'absolute',
    height: width * 1,
    width: width * 1,
    borderRadius: width,
    left: 0,
    top: 0
  },
  imah:{
  
    width:"100%",
    height:'100%',
   top:"50"
 
  }

});
