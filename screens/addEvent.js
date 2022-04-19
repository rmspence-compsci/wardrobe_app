import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase/config'
import { Picker } from 'react-native';


//var month =  ['January','February','March','April','May','June','July','August','September','October','November','December'];
var date_selected = new Date().getDate();


export default function App({navigation}) {
    //const savePressed = () => {
    //navigation.navigate('Calendar')};

    //const goToSavedOutfits = () => {
    //navigation.navigate('SavedOutfits')};

    const [selectedValue, setSelectedValue]= useState('casual');
    const [text, setText] = useState('');
    const [event, setEvent] = useState('');
    const [venue, setVenue] = useState('in');
    const [year, setYear]= useState('2022');

    const create = () => {
      const myDoc1 = doc(db, String(event), "description")
      const description = {"description": String(text)}
      setDoc(myDoc1, description)
      const myDoc2 = doc(db, String(event), "attire")
      const attire = {"attire": String(selectedValue)}
      setDoc(myDoc2, attire)
      const myDoc3 = doc(db, String(event), "venue")
      const Venue = {"venue": String(venue)}
      setDoc(myDoc3, Venue)
  
      .then(() => {
        Alert.alert('Event Added')
      })
      .catch(() => {
        Alert.alert('Error: failed to add event')
      })
    }


  return (
    
    <SafeAreaView style={styles.container}>
      <View style = {styles.header}>
        <View style = {styles.header_title}> 
            
            {/* <Text style = {styles.addEventText}> Add event </Text> */}

        </View>
      </View>

      <View style = {styles.field_constainer}>
        <View style = {styles.boxedText}>
          <View style = {{
            width: 300,
            hiehgt: 47,
            borderRadius: 10,
            backgroundColor : '#FFFFFF',
            justifyContent : 'center',
          }}>
            <Text style = {styles.text}> Event Title: </Text>

          </View>
        </View>

        <View style = {styles.boxedText}>
        
        <TextInput 
        placeholder="Event title"
        onChangeText={ newEvent => setEvent(newEvent)}
        defaultValue = {event}
        style={{color: '#16579c'}}
        />
        <Text style = {styles.addDescription}> 
        
        </Text>

      </View>

        <View style = {styles.boxedText}>
          <View style = {{
            width: 300,
            hiehgt: 47,
            borderRadius: 10,
            backgroundColor : '#FFFFFF',
            justifyContent : 'center',
          }}>
            <Text style = {styles.text}> Description: </Text>

          </View>
        </View>

        <View style = {styles.boxedText}>
        
          <TextInput 
          multiline
          numberOfLines={4}
          placeholder="Add description"
          onChangeText={ newText => setText(newText)}
          defaultValue = {text}
          style={{color: '#16579c'}}
          />
          <Text style = {styles.addDescription}> 
          
          </Text>

        </View>

        <View style = {styles.boxedText}>
        <View style = {{
            width: 300,
            hiehgt: 47,
            borderRadius: 10,
            backgroundColor : '#FFFFFF',
            justifyContent : 'center',
          }}>
            <Text style = {styles.text}> Attire: </Text>
          </View>
        </View>


        <View style={styles.picker}>
          <View style={{
            backgroundColor: '#FFFFFF',
            width: 300,
            height: 47,
            borderRadius: 10,
            justifyContent: 'center',
            fontSize: 20,
            overflow: "hidden"
          }}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Casual" value="casual" />
              <Picker.Item label="Business Casual" value="business casual" />
              <Picker.Item label="Semi-formal" value="semi-formal" />
              <Picker.Item label="Formal" value="formal" />                    
              <Picker.Item label="Black tie" value="black tie" />
              <Picker.Item label="Costume" value="shoes" />
            </Picker>

          </View>
        </View>
        <View style = {styles.boxedText}>
          <View style = {{
            width: 300,
            hiehgt: 47,
            borderRadius: 10,
            backgroundColor : '#FFFFFF',
            justifyContent : 'center',
          }}>
            <Text style = {styles.text}> Venue: </Text>

          </View>
        </View>
        
        <View style={styles.picker}>
          <View style={{
            backgroundColor: '#FFFFFF',
            width: 300,
            height: 47,
            borderRadius: 10,
            justifyContent: 'center',
            fontSize: 20,
            overflow: "hidden",
          }}>
            <Picker
              venue ={venue}
              onValueChange={(venueValue, venueIndex) => setVenue(venueValue)}
            >
              <Picker.Item label="Indoor" value="in" />
              <Picker.Item label="Outdoor" value="out" />
              <Picker.Item label="Indoor/Outdoor" value="inout" />

            </Picker>
          </View>
        </View>
        <View style = {styles.boxedText}>
          <View style = {{
            width: 300,
            hieght: 47,
            borderRadius: 10,
            backgroundColor : '#FFFFFF',
            justifyContent : 'center',
          }}>
            <Text style = {styles.text}> Have an outfit in mind? </Text>

          </View>
        </View>
        

        <View style={styles.outfitButton_container}>
          
          <Button
            title="Pick an outfit"
            style={styles.outfitButton}
            //onPress = {goToSavedOutfits}

          />
        </View>

        <View style={styles.saved}>
          
          <Button
            title="Save"
            style = {{
              color : 'white'
            }}
            onPress = {create}

          />
        </View>

      </View>
    </SafeAreaView>
    
  );

}

const styles = StyleSheet.create({
  container: {
  },

  header: {
    backgroundColor: 'dodgerblue',
    justifyContent: "space-evenly",
    flexDirection: 'column',
    paddingVertical: 60,
    paddingHorizontal: 100,
    top: -30,
  },

  header_title: {
    top: 20,
  },

  field_constainer:{
    backgroundColor: '#fff',
    justifyContent: "space-evenly",
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    color: 'black',
    paddingLeft: 10,
    fontWeight : 'normal'
  },


  addEventText : {
    fontSize: 30,
    fontWeight : "bold",
    alignItems : 'baseline',
    color: 'white',
    paddingLeft: 10,
  },
  
  addDescription : {
    fontSize : 18,
    color: 'black',
    backgroundColor: '#fff',
    alignItems : 'baseline',
    width : 47,
    maxWidth: '80%'
  }, 

  outfitButton_container: {
    top: 10,
  },
  
  outfitButton : {
    fontSize : 20,
    fontWeight : "bold",
    color: 'white',
    backgroundColor : '#16579c',
  },
  
  saved : {
    fontSize : 20,
    alignContent :  'center',
    fontWeight : "bold",
    color: '#f7f7f7',
    backgroundColor : '#16579c', 
    width: 300,
    height: 40,
    borderRadius : 10,
    top: 15,
  }

});

