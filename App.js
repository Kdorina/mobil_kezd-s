import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableHighlight } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
 
  const [countnum, setCountnum] = useState(0);
  function increment(){
    let actualCount = countnum;
    let newCount = ++actualCount;
    setCountnum(newCount);
    console.log(newCount);
  }
  function resetCounter(){
    setCountnum(0);
  }
 
  return (
    <View style={styles.container}>
      <Text>Számol</Text>
      <Button title = 'számol' onPress={increment}/>
      <StatusBar style="auto" />
      <TouchableHighlight  style={styles.button1}><Text style={styles.text}>Számol</Text></TouchableHighlight>
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
  button1: {
    backgroundColor: '#4A90E2',
    padding: '10px',
    width:'50%',
    borderRadius: '10px',
    marginTop: "10px",
  },
  text:{
     color: '#FFFFFF',
     fontWeight: "600",
     textAlign: 'center'
  }

});

