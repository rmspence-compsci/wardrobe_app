import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native'
import moment from 'moment-timezone'


import FutureWeather from './FutureWeather.js'

// eslint-disable-next-line react/prop-types
const WeatherScroll = ({weatherData}) => {
  return (
    <ScrollView horizontal={true} style={styles.ScrollView}>
        <CurrWeather temp={weatherData && weatherData.length > 0 ? weatherData[0].temp : {}} 
        data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}/>

        <CurrWeather temp={weatherData && weatherData.length > 0 ? weatherData[1].temp : {}} 
        data={weatherData && weatherData.length > 0 ? weatherData[1] : {}}/>

        <CurrWeather temp={weatherData && weatherData.length > 0 ? weatherData[2].temp : {}} 
        data={weatherData && weatherData.length > 0 ? weatherData[2] : {}}/>

        <CurrWeather temp={weatherData && weatherData.length > 0 ? weatherData[3].temp : {}} 
        data={weatherData && weatherData.length > 0 ? weatherData[3] : {}}/>

        <CurrWeather temp={weatherData && weatherData.length > 0 ? weatherData[4].temp : {}} 
        data={weatherData && weatherData.length > 0 ? weatherData[4] : {}}/>

        <CurrWeather temp={weatherData && weatherData.length > 0 ? weatherData[5].temp : {}} 
        data={weatherData && weatherData.length > 0 ? weatherData[5] : {}}/>
        
        <CurrWeather temp={weatherData && weatherData.length > 0 ? weatherData[6].temp : {}} 
        data={weatherData && weatherData.length > 0 ? weatherData[6] : {}}/>
    </ScrollView>
  )
}

const CurrWeather = ({temp, data}) => {
    const img = {uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} // images are bugging out - need to talk with group
    return (
        <View style={styles.currentTempcontainer}>
            <Image source={img} style={styles.image}/>
            <View style={styles.internalContainer}>
                <Text style={styles.currentTempDay}>{moment(data.dt * 1000).format('dddd')}</Text>
                <Text style={styles.currentTempDT}>Day - {Math.floor(temp.day-273)}&#176;C</Text>
                <Text style={styles.currentTempNT}>Night - {Math.floor(temp.night-273)}&#176;C</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    // eslint-disable-next-line react-native/no-color-literals
    ScrollView: {
        backgroundColor: '#16579c',
        padding:35,
        borderRadius: 10,

    },
    image: {
        width: 150,
        height: 150
    },

    internalContainer: {
        paddingRight: 40,
        

    },

    // eslint-disable-next-line react-native/no-color-literals
    currentTempcontainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,

    },

    currentTempDay: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,


    },

    currentTempDT: {
        fontSize: 15,
        fontWeight: '100',
        textAlign: 'center',
        marginBottom: 10,

    },
    currentTempNT: {
        fontSize: 15,
        fontWeight: '100',
        textAlign: 'center',
        marginBottom: 10,

    },

    
})

export default WeatherScroll
