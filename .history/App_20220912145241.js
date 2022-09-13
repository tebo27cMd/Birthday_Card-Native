import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';

const{width} =Dimensions.get('screen');
const colors =['#A1C9F1','#F8DAE9','#30821b'];


export default function App() {
  return (
    <View style={styles.container}>
      {colors.map((x,i)=>(
        <View style={[styles.bgCircle1,{
          backgroundColor:x,
          transform:[
            {translateX:-(width/2)+(1*width/colors.length) },
            {translateY:-(width*0.2)-(i/0.75*width/colors.length)}
          ]
        }]}key={i.toString()}/>
      ))}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  bgCircle1:{
    position:'absolute',
    height:width*.9,
    width:width*0.9,
    borderRadius:width,
    left:0,
    top:0
  }
});
