import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, TextComponent } from 'react-native';

const AddClothes = ({ navigation }) => {
  
  const onSavedOutfitsPressHandler = () => {
    navigation.navigate('SavedOutfits')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          Add Clothes Loading ...
        </Text>
        <Button
          title="Saved Outfits"
          style={styles.savedOutfitsButton}
          onPress={onSavedOutfitsPressHandler}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#274463',
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
}
);

export default AddClothes;