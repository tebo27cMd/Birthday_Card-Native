import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Image, View, Dimensions, ScrollView } from 'react-native';
import bd from './assets/birth.png';
const { width } = Dimensions.get('screen');
const colors = ['#A1C9F1', '#F8DAE9', '#30821b'];


export default function App() {
  return (
    <Image source={bd}  style={styles.imah}>
    <Text>he</Text>
      </Image>
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
   top:"50%"
 
  }

});
