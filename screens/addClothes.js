import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, Image, Button, Pressable, TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { ClothingType } from "../recommender";
import Dialog from "react-native-dialog";
import AttributeBox from "../components/attributeBox";
import AsyncStorage from '@react-native-async-storage/async-storage';

const nameArray = [];   // Store list of Names of outfit pieces into array

const typeImages = {
  [ClothingType.Hat]:  require('../assets/beanie.png'),
  [ClothingType.Coat]: require('../assets/coat.png'),
  [ClothingType.Layer]: require('../assets/layer.png'),
  [ClothingType.Pants]: require('../assets/pants.png'),
  [ClothingType.Shoes]: require('../assets/shoes.png')
}
const AddClothes = ({ navigation }) => {

  const onSavedOutfitsPressHandler = () => {
    navigation.navigate('SavedOutfits')
  };

  const [colourValue, setColourValue] = useState("black");
  const [titleText, setTitleText] = useState("Name your piece!");
  const [clothType, setClothType] = useState(ClothingType.Hat);
  const [warmth, setWarmthValue] = useState(1);
  const [wind, setWindValue] = useState(1);
  const [rain, setRainValue] = useState(1);
 
  function increment(value, setter) {
    return () => setter(value + 1);
  }
  
  function decrement(value, setter) {
    return () => setter(value - 1);
  }
   
  const saveHandler = () => {
    let newOutfit = {
      color: colourValue,
      name: titleText,
      type: clothType,
      warmth: warmth,
      wind: wind,
      rain: rain
    }
    storeData(newOutfit);
  }

  const storeData = async (value) => {
    try {
      nameArray.push(value.name)
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@' + value.name, jsonValue)
      //console.log(value)
      console.log("Current Array: " + nameArray)

    } catch (e) {
      // saving error
    }
  }

  // Fuction to read clothing pieces saved
  const loadingHandler = async () => {
    try{
      for (let i = 0; i < nameArray.length; i++){
        const jsonValue = await AsyncStorage.getItem('@'+ nameArray[i])
        console.log(jsonValue)
      }
    } catch (e){
      console.log("Error when loading outfits.")
    } 
  }

  let warmthValue = '0'
  warmthValue = warmth + "";

  let windValue ='0';
  windValue = wind + "";

  let rainValue ='0';
  rainValue = rain + "";


  return (
    <SafeAreaView style={styles.container}>
      
      {/* Display Image of Clothes here  */}
      <View style={styles.clothesImageBox}>
        <Image 
            style={{
              width:240,
              height:240,
              resizeMode: 'contain',
              tintColor: colourValue,
            } 
            }
            
            source={typeImages[clothType]} // Disabled beanie due to screen burn in
            
        />
      </View>

      {/* Title */}
      <View style={styles.titleView}>
        <TextInput
            style={styles.outfitTitle}
            value={titleText}
            onChangeText={setTitleText}
        />
      </View>
      {/* <Button  style={styles.saveBo    xText} title="Load"  onPress={loadingHandler}
             color={Platform.OS == 'android' ? '#16579c' : 'white' }
            /> */}
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
              selectedValue={clothType}
              onValueChange={setClothType}
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
                selectedValue={colourValue}
                onValueChange={setColourValue}
              >
                <Picker.Item label="black" value="black" />
                <Picker.Item label="yellow" value="yellow" />
                <Picker.Item label="red" value="red" />
                <Picker.Item label="green" value="green" />
                <Picker.Item label="blue" value="blue" />
            </Picker>
          </View>
          
          

          <View style={styles.AttributeBoxWrapper}>
            <AttributeBox atrValue={warmth} title='Warmth'>
              <Text style={styles.clothesImage}>{warmthValue}</Text>
            </AttributeBox>
          </View>
          
          <View style={styles.AttributeBoxWrapper}>
            <AttributeBox atrValue={windValue}  title='Wind'>
              <Text style={styles.clothesImage}>{windValue}</Text>
            </AttributeBox>
          </View>

          <View style={styles.AttributeBoxWrapper}>
            <AttributeBox atrValue={rainValue}  title='Rain'>
            <Text style={styles.clothesImage}>{rainValue}</Text>
            </AttributeBox>
          </View>

          <View style={styles.SaveBoxWrapper}>
            <Button  style={styles.saveBoxText} title="Save"  onPress={saveHandler}
             color={Platform.OS == 'android' ? '#16579c' : 'white' }
            />
          </View>

      </View>

      <Pressable style={styles.warmthLeft} onPress={decrement(warmth, setWarmthValue)}>
        <Text style={styles.circularText}>-</Text>
      </Pressable>
      <Pressable style={styles.warmthRight} onPress={increment(warmth, setWarmthValue)}>
        <Text style={styles.circularText}>+</Text>
      </Pressable>

      <Pressable style={styles.windLeft} onPress={decrement(wind, setWindValue)}>
        <Text style={styles.circularText}>-</Text>
      </Pressable>
      <Pressable style={styles.windRight} onPress={increment(wind, setWindValue)}>
        <Text style={styles.circularText}>+</Text>
      </Pressable>

      <Pressable style={styles.rainLeft} onPress={decrement(rain, setRainValue)}>
        <Text style={styles.circularText}>-</Text>
      </Pressable>
      <Pressable style={styles.rainRight} onPress={increment(rain, setRainValue)}>
        <Text style={styles.circularText}>+</Text>
      </Pressable>


      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleView: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  outfitTitle: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: "center"
  },
  clothesImageBox:{
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    alignItems: 'center',
    top: 90,
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
    color: "#FFFFFF",
    position: "absolute",
    top: 10,
    right:110,
    fontWeight: "bold",
    fontSize: 30,

    
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
  },
  warmthLeft: {
    backgroundColor: "#FFFFFF",
    width: 28,
    height: 28,
    borderColor: "#A4A4A4",
    borderWidth: 2,
    borderRadius: 100,
    position: "absolute",
    left:28,
    bottom: 146
},
warmthRight: {
    backgroundColor: "#FFFFFF",
    width: 28,
    height: 28,
    borderColor: "#A4A4A4",
    borderWidth: 2,
    borderRadius: 100,
    position: 'absolute',
    left: 90,
    bottom: 146
},
windLeft:{
    backgroundColor: "#FFFFFF",
    width: 28,
    height: 28,
    borderColor: "#A4A4A4",
    borderWidth: 2,
    borderRadius: 100,
    position: "absolute",
    left:150,
    bottom: 146
},
windRight:{
  backgroundColor: "#FFFFFF",
  width: 28,
  height: 28,
  borderColor: "#A4A4A4",
  borderWidth: 2,
  borderRadius: 100,
  position: 'absolute',
  left: 212,
  bottom: 146
},
rainLeft:{
  width: 28,
  height: 28,
  borderColor: "#A4A4A4",
  borderWidth: 2,
  borderRadius: 100,
  position: "absolute",
  left:275,
  bottom: 146
},
rainRight:{
  backgroundColor: "#FFFFFF",
  width: 28,
  height: 28,
  borderColor: "#A4A4A4",
  borderWidth: 2,
  borderRadius: 100,
  position: 'absolute',
  left: 332,
  bottom: 146
},
circularText:{
    color: "#A4A4A4",
    alignSelf: "center",
    bottom: 1,
    fontWeight: "bold",
    fontSize: 22,
    position: "absolute",
    
},

attributeValue:{
  fontSize:30,
  position:"absolute",
  
}

  
  
});

export default AddClothes;
