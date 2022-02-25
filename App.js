import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          Recommended Wardrobe
        </Text>



      </View>
      <View style={styles.wardrobeView}>
        <Image 
          source={require('./assets/tshirt.png')}
          style={styles.tshirt} 
        />
        <Image 
          source={require('./assets/pants.png')}
          style={styles.pants} 
        />
        <Image 
          source={require('./assets/shoes.png')}
          style={styles.shoes} 
        />

      </View>
      <View style={styles.buttonView}>
        <Button
          title="Weather"
          style={styles.weatherButton}
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Button
          title="Add Clothes"
          style={styles.clothesButton}
          onPress={() => Alert.alert('Simple Button pressed')}
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
    backgroundColor: 'yellow',
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
  }
});
