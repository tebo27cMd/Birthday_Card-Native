import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, ImageBackground, View, Dimensions,Text } from 'react-native';
import bd from './assets/bd.jpg';
const { width } = Dimensions.get('screen');
const colors = ['#A1C9F1', '#F8DAE9',];




export default function App() {
  return (
     <ImageBackground source={bd} resizeMode="cover" style={styles.imah}>
     
      <View style={styles.container}>
   
  <Text style={styles.birthdayTag}>
    Fifi aka Kamario
  </Text>
  <Text style={styles.birthdayMsg}>
  “You’re a really hard individual to shop for… so I didn’t get you anything. Happy birthday!”
  </Text>
      </View>
      </ImageBackground>


   
      



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,



  },
  birthdayMsg:{
    fontFamily:'Yatra-One',
    position:'relative',
    top:'7%',
     width:"100%",
     height:'100%',
     textAlign:'center',
    fontWeight:'bold',
    color:'black',
    fontSize:'22px',

  },
  birthdayTag:{
  
   position:'relative',
   top:'7%',
    width:"100%",
    height:'100%',
    textAlign:'center',
   fontWeight:'bold',
   color:'black',
   fontSize:'22px',

    
  },
  bgCircle1: {
    position: 'absolute',
    height: width * 1,
    width: width * 1,
    borderRadius: width,
    left: 0,
    top: -70,
    justifyContent:'space-between'

  },
  imah:{
    top: 70,
    width:"100%",
    height:'100%',

 
  }

});
