import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, TextComponent } from 'react-native';

const Recommended = ({ navigation }) => {

// send a user to the calendar page when they click the calendar button
  const onCalendarPressHandler = () => {
    navigation.navigate('Calendar')
  };
  // send a user to the add clothes page when they click the add clothes button
  const onAddClothesPressHandler = () => {
    navigation.navigate('AddClothes')
  };
  // send a user to the weather page when they click the weather button
  const onWeatherPressHandler = () => {
    navigation.navigate('Weather')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wardrobeView}>
        {/* Title */}
        <Text style={styles.title}>Today's Outfit</Text>
        {/* Generic images */}
        <Image 
          source={require('../assets/plainshirt.png')}
          style={styles.tshirt} 
          resizeMode='contain'
        />
        <Image 
          source={require('../assets/jeans.png')}
          style={styles.pants} 
          resizeMode='contain'
        />
        <Image 
          source={require('../assets/gumshoes.png')}
          style={styles.shoes} 
          resizeMode='contain'
        />
      </View>
      {/* Compenent for the weather preview */}
      <View style={styles.weatherSection}>
        <Text style={styles.weatherText}> 22 degrees Celcius</Text>
        <Image
        source={{uri: 'http://openweathermap.org/img/wn/10d@2x.png'}}
        style={styles.weatherIcon}
        />
      </View>
      {/* View for all three buttons */}
      <View style={styles.buttonView}>
        <Button
          title="More Weather"
          style={styles.weatherButton}
          onPress={onWeatherPressHandler}
          color={Platform.OS == 'android' ? '#16579c' : 'white' }
        />
        <Button
          title="Calendar"
          style={styles.calendarButton}
          onPress={onCalendarPressHandler}
          color={Platform.OS == 'android' ? '#16579c' : 'white' }
        />
        <Button
          title="Add Clothes"
          style={styles.clothesButton}
          onPress={onAddClothesPressHandler}
          color={Platform.OS == 'android' ? '#16579c' : 'white' }
        />
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
