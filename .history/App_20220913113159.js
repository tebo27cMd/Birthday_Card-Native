import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, ImageBackground, View, Dimensions,Text } from 'react-native';
import bd from './assets/bd.jpg';
const { width } = Dimensions.get('screen');





export default function App() {
  return (
     <ImageBackground source={bd} resizeMode="cover" style={styles.imah}>
     
      <View style={styles.container}>
   
  <Text style={styles.birthdayTag}>
    Fifi aka Kamario
    <Text style={styles.birthdayMsg}>
  “You’re a really hard individual to shop for… so I didn’t get you anything. Happy birthday!”
  </Text>
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
   
     
     width:"100%",
     height:'100%',
     textAlign:'center',
    fontWeight:'bold',
    color:'green',
    fontSize:'18px',

  },
  birthdayTag:{
  left:'33%',
   position:'relative',
   top:'23%',
    width:"50%",
    height:'100%',
    textAlign:'center',
   fontWeight:'bold',
   color:'#F6B092',
   fontSize:'20px',

    
  },

  imah:{
    top: 70,
    width:"100%",
    height:'100%',

 
  }

});
