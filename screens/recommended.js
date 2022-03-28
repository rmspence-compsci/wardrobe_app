import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, TextComponent } from 'react-native';

const Recommended = ({ navigation }) => {

  const onCalendarPressHandler = () => {
    navigation.navigate('Calendar')
  };

  const onAddClothesPressHandler = () => {
    navigation.navigate('AddClothes')
  };
  const onWeatherPressHandler = () => {
    navigation.navigate('Weather')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wardrobeView}>
        <Text style={styles.title}>Today's Outfit</Text>
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
      <View style={styles.weatherSection}>
        <Text style={styles.weatherText}> 22 degrees Celcius</Text>
        <Image
        source={{uri: 'http://openweathermap.org/img/wn/10d@2x.png'}}
        style={styles.weatherIcon}
        />
      </View>
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
