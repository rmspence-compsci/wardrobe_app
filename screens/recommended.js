import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, TextComponent } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recommender } from "../recommender";
import ClothingImage from '../components/ClothingImage';
import { useEffect, useLayoutEffect, useState } from 'react';

const Recommended = ({ navigation }) => {

// send a user to the calendar page when they click the calendar button
  // send a user to the add clothes page when they click the add clothes button
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        return <Button title="Add" color="white" onPress={() => navigation.navigate("AddClothes")} />
      },
  
      title: "Today's Outfit",
    });
  }, [navigation])

  const [recommendation, setRecommendation] = useState(undefined);
  const [icon, setIcon] = useState(undefined);
  const [temp, setTemp] = useState(undefined);

  useEffect(() => {
    AsyncStorage.getAllKeys()
      .then((keys) => {
        return Promise.all(keys.map((key) => AsyncStorage.getItem(key)));
      })
      .then((clothes) => {
        const recommender = new Recommender(clothes.map((clothesJSON) => JSON.parse(clothesJSON)));
        const outfit = recommender.recommendOutfit({ willRain: true })
        // console.log(recommender.wardrobe);
        // console.log(outfit);
        setRecommendation(outfit);
      });
  }, [])

  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=53.3498&lon=6.2603&exclude=minutely,hourly&appid=50b857753c980b99f5281bf0531b0e98")
    .then((res) => res.json())
    .then((weatherData) => {
      setIcon(`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`);
      setTemp(Math.floor(weatherData.current.temp - 273));
    });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wardrobeView}>
        {/* Title */}
        {/* <Text style={styles.title}>Today's Outfit</Text> */}
        {/* Generic images */}
        {/* <Image 
          source={require('../assets/plainshirt.png')}
          style={styles.tshirt} 
          resizeMode='contain'
        /> */}
        { recommendation && <ClothingImage color={recommendation.torso[0].color} type={recommendation.torso[0].type} size={180} />}
        {/* { recommendation && <ClothingImage color={recommendation.legs[0].color} type={recommendation.legs[0].type} />} */}
        {/* <Image 
          source={require('../assets/jeans.png')}
          style={styles.pants} 
          resizeMode='contain'
        /> */}
        { recommendation && <ClothingImage color={recommendation.legs[0].color} type={recommendation.legs[0].type} size={180} />}
        { recommendation && <ClothingImage color={recommendation.shoes.color} type={recommendation.shoes.type} size={140} />}
        {/* <Image 
          source={require('../assets/gumshoes.png')}
          style={styles.shoes} 
          resizeMode='contain'
        /> */}
      </View>
      {/* Compenent for the weather preview */}
      <View style={styles.weatherSection}>
        { icon && temp && <>
          <Text style={styles.weatherText}> {temp} degrees Celcius</Text>
          <Image
          source={{uri: icon}}
          style={styles.weatherIcon}
          />
        </>}
      </View>
    </SafeAreaView>
  );
};

// styles for all the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16579c',
  },  
  wardrobeView: {
    flex: 14,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
    color: 'black',
    fontSize: 36,
    fontWeight: 'bold',
    maxWidth: '80%',
},
  buttonView: {
    flex: 1,
    backgroundColor: '#16579c',
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"flex-end"
  },
  weatherButton: {
    flex:1,
  },
  weatherSection: {
    flex: 2,
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:'center'
  },
  weatherText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    maxWidth: '80%',
  },
  clothesButton: {
    flex:1,
  },
  calendarButton: {
    flex:1
  },
  tshirt: {
    flex:3
  },
  shoes: {
    flex:1
  },
  pants: {
    flex:3 
  },
  weatherIcon: {
    height:100,
    width:100
  }
}
);

export default Recommended;
