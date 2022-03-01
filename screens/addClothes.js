import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, TextComponent } from 'react-native';

const AddClothes = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          Add Clothes Loading ...
        </Text>
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

export default AddClothes;