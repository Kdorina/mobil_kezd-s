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

  function showAbout(){
    alert("Névjegy", "Kovács Dorina", "SZOFT II/N", "2023-02-27");
  }
 
  return (
    <View style={styles.container}>
      <Button title="Névjegy" onPress={showAbout}/>
      <Button title="Alap" onPress={resetCounter}/>

      <Text style={styles.title}>Számol</Text>
      <Text>{countnum}</Text>

      <TouchableHighlight onPress={increment} style={styles.button1}>
      <Text style={styles.text}>Számol</Text>
      </TouchableHighlight>
      
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
     textAlign: 'center',
     fontSize: "15px",
     
  },
  title:{
     fontWeight: "600",
     textAlign: 'center',
     fontSize: 30,
     padding: 20,

     
  }

});

