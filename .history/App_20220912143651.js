import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';

const{width} =Dimensions.get('screen')
const colors =['#0052d6','#11998b','#30821b'];


export default function App() {
  return (
    <View style={styles.container}>
      {colors.map((x,i)=>(
        <View style={[styles.bgCircle1,{
          backgroundColor:x,
          transform:[
            {translateX:-(width/2)+(1*width/colors.length) },
            {translateY:-(width*0.75)-(i/0.75*width/colors.length)}
          ]
        }]}key={i.toString()}/>
      ))}
      <Text>Happy birthday li</Text>
      <
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
  bgCircle1:{
    position:'absolute',
    height:'width*2',
    width:'width*2',
    borderRadius:'width',
    left:0,
    top:0
  }
});
