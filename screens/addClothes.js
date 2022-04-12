import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, Image, Button, Pressable } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { ClothingType } from "../recommender";
import Dialog from "react-native-dialog";
import AttributeBox from "../components/attributeBox";

const AddClothes = ({ navigation }) => {
  
  const onSavedOutfitsPressHandler = () => {
    navigation.navigate('SavedOutfits')
  };

  const [selectedValue, setSelectedValue] = useState("hat");

  const [colourValue, setColourValue] = useState("black");

  let outfit = {
    color: "",
    name: "",
    type: ClothingType.Hat,
    rain: 1,
    warmth: 1,
    wind: 1
  }

  
  return (
    <SafeAreaView style={styles.container}>
      {/* Display Image of Clothes here  */}
      <View style={styles.clothesImageBox}>
        <Image 
            source={require('../assets/beanie.png')}
            style={styles.clothesImage} 
        />
      </View>
      <View style={styles.blueRectangle}> 

          <Text style={styles.titleText}>Add Clothes</Text>

          <View style={styles.savedOutfitsButtonWrapper}>
            <Button
            title="Saved Outfits"
            style={styles.savedOutfitsButton}
            onPress={onSavedOutfitsPressHandler}
            color={Platform.OS == 'android' ? '#16579c' : 'white' }
            />
          </View>

          <View style={styles.picker1Wrapper}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Hat" value={ClothingType.Hat}/>
              <Picker.Item label="Coat" value={ClothingType.Coat}/>
              <Picker.Item label="Layer" value={ClothingType.Layer} />
              <Picker.Item label="Pants" value={ClothingType.Pants} />
              <Picker.Item label="Shoes" value={ClothingType.Shoes} />
            </Picker>
          </View>

          <View style={styles.picker2Wrapper}>
            <Picker
                style={styles.picker}
                colourValue={colourValue}
                onValueChange={(itemValue, itemIndex) => setColourValue(itemValue)}
              >
                <Picker.Item label="black" value="black" />
                <Picker.Item label="yellow" value="yellow" />
                <Picker.Item label="red" value="red" />
                <Picker.Item label="green" value="green" />
                <Picker.Item label="blue" value="blue" />
            </Picker>
          </View>
          

          <View style={styles.AttributeBoxWrapper}>
            <AttributeBox atrValue={outfit.warmth} title='Warmth'>

            </AttributeBox>
          </View>
          
          <View style={styles.AttributeBoxWrapper}>
            <AttributeBox atrValue={outfit.wind}  title='Wind'>

            </AttributeBox>
          </View>

          <View style={styles.AttributeBoxWrapper}>
            <AttributeBox atrValue={outfit.rain}  title='Rain'>

            </AttributeBox>
          </View>

          <View style={styles.SaveBoxWrapper}>
            <Text style={styles.saveBoxText}>Save</Text>
          </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  clothesImageBox:{
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    alignItems: 'center',
    top: 45,
    left: 67,
    width: 250,
    height: 240,

  },
  clothesImage:{
    width:240,
    height:240,
  },
  blueRectangle:{
    backgroundColor: '#1E579C',
    width: 390,
    height: 330,
    position: 'absolute',
    bottom: 0,
    
    borderRadius: 20,
    shadowOpacity: 1, // IOS Only
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  },
  AttributeBoxWrapper:{
    backgroundColor: '#FFFFFF',
    width: 100,
    height: 75,
    borderRadius: 10,
    top: 15,
  },
  titleText:{
    color:'#FFFFFF',
    position: "absolute",
    top: 10,
    right:110,
    fontWeight: "bold",
    fontSize: 30
    
  },
  savedOutfitsButtonWrapper:{
    position: "absolute",
    top: 40,
    right:135,
  },
  savedOutfitsButton:{
    color:'#FFFFFF',
    fontWeight: "bold",
    fontSize: 30
  },
  picker1Wrapper:{
    backgroundColor: '#FFFFFF',
    width: 160,
    height: 42,
    borderRadius: 5,
    justifyContent: 'center',
    fontSize: 20,
    overflow: "hidden",
    position: "absolute",
    top: 80
  },
  picker2Wrapper:{
    backgroundColor: '#FFFFFF',
    width: 160,
    height: 42,
    borderRadius: 5,
    
    justifyContent: 'center',
    overflow: "hidden",
    position: "absolute",
    top: 80,
    right: 20,
  },
  SaveBoxWrapper:{
    backgroundColor: "#151515",
    width: 208,
    height: 47,
    position: "absolute",
    bottom: 40,
    borderRadius: 15,
    left: 90,
    alignItems: "center",
    justifyContent: "center"
  },
  saveBoxText:{
    color:'#FFFFFF',
    fontWeight: "bold",
    fontSize: 22
  }

  
  
});

export default AddClothes;
