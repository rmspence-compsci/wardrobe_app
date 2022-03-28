import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

import Datetime from '../components/Datetime'
import WeatherScroll from '../components/WeatherScroll'


const apiKey = ["50b857753c980b99f5281bf0531b0e98"]

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchapi('53.3498', '6.2603')
  }, [])
  

  const fetchapi = (latitude, longitude) => {
    fetch( "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly" + "&appid=" + apiKey)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)  
      })
  }

  return (
    <View style={styles.container}>

        <Text style={styles.Hello}>Good morning,</Text>
        <Text style={styles.name}>Max.</Text>

        <Datetime current={data.current} timezone={data.timezone}/> 
        <WeatherScroll weatherData={data.daily}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
    
  },

  Hello: {
    color: 'black',
    fontSize: 36,
    fontWeight: 'bold',
    maxWidth: '80%',
  },
  
  name: {
    color: 'black',
    fontSize: 36,
    fontWeight: 'bold',
    maxWidth: '80%',
  }
});
