import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import getWeather from '../API/getWeather';

import Datetime from '../components/Datetime'
import WeatherScroll from '../components/WeatherScroll'



export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchapi('53.3498', '6.2603')
  }, [])
  

  const fetchapi = async (latitude, longitude) => {
    await getWeather(latitude, longitude)
    .then(data => data)
    .then(repsonseData => {
      setData(repsonseData);
      console.log("cheese")
    })
    .catch(err => console.log(err))
      
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
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
    
  },

  // eslint-disable-next-line react-native/no-color-literals
  Hello: {
    color: 'black',
    fontSize: 36,
    fontWeight: 'bold',
    maxWidth: '80%',
  },
  
  // eslint-disable-next-line react-native/no-color-literals
  name: {
    color: 'black',
    fontSize: 36,
    fontWeight: 'bold',
    maxWidth: '80%',
  }
});
