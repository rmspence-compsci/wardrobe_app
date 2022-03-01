import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, TextComponent } from 'react-native';

const Recommended = ({ navigation }) => {

  const onAddClothesPressHandler = () => {
    navigation.navigate('AddClothes')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wardrobeView}>
        <Image 
          source={require('../assets/tshirt.png')}
          style={styles.tshirt} 
        />
        <Image 
          source={require('../assets/pants.png')}
          style={styles.pants} 
        />
        <Image 
          source={require('../assets/shoes.png')}
          style={styles.shoes} 
        />
      </View>
      <View style={styles.weatherSection}>
        <Text style={styles.weatherText}> 22 degrees Celcius</Text>
        <Image
        source={require('../assets/sunnyicon.jpeg')}
        style={styles.sunnyIcon}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          title="More Weather"
          style={styles.weatherButton}
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Button
          title="Add Clothes"
          style={styles.clothesButton}
          onPress={onAddClothesPressHandler}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },  
  titleView: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems:"center"

  },
  title: {
    color:"white",
    fontSize:30, 

  },
  wardrobeView: {
    flex: 14,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center'

  },
  buttonView: {
    flex: 1,
    backgroundColor: 'white',
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
    justifyContent:'space-around'

  },
  weatherText: {
    fontSize:30

  },
  clothesButton: {
    flex:1,

  },
  tshirt: {
    height:200,
    width:200
  },
  shoes: {
    height:100,
    width:100
  },
  pants: {
    height:200,
    width:200
  },
  sunnyIcon: {
    height:100,
    width:100
  }
}
);

export default Recommended;