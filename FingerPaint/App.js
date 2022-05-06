import React,{useState} from 'react';
import {View, Switch, Text, Stylesheet} from 'react-native';
import styles from './styles'

export default function App(){
  const [location,setLocation] = useState(false)
  const [mic,setMic] = useState(false)
  const [storage,setStorage] = useState(false)
 

  return (
    <View style={styles.container}>
      <Text style={{color: 'darkslateblue', fontSize: 30}}>Hello World</Text>
    </View>
  );
  
  }

 
