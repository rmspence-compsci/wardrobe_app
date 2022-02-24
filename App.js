import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          Recommended Wardrobe
        </Text>



      </View>
      <View style={styles.wardrobeView}>


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
    backgroundColor: 'black',

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

  }
});
