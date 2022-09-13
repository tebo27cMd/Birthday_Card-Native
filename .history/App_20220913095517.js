import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, ImageBackground, View, Dimensions,Button } from 'react-native';
import * as Animatable from 'react-native-animatable'
import bd from './assets/birth.png';
const { width } = Dimensions.get('screen');
const colors = ['#A1C9F1', '#F8DAE9'];




export default function App() {
  const []
  return (
     <ImageBackground source={bd} resizeMode="contain" style={styles.imah}>
      <View style={styles.container}>
        {colors.map((x, i) => (
          <View style={[styles.bgCircle1, {
            backgroundColor: x,
            transform: [
              { translateX: -(width / 2) + (1 * width / colors.length) },
              { translateY: -(width * 0.2) - (i / 0.75 * width / colors.length) }
            ]
          }]} key={i.toString()} />

        ))} 

      </View>
      </ImageBackground>


   
      



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
    top: -30,

  },
  imah:{
  
    width:"100%",
    height:'100%',

 
  }

});
