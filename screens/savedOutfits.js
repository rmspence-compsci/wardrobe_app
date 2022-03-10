import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, TextComponent } from 'react-native';

const SavedOutfits = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          Saved Outfits Loading ...
        </Text>
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

export default SavedOutfits;