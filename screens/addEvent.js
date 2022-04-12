import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, StyleSheet, Text, TextInput, Button } from 'react-native';
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


  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.boxedText}>
        
          <Text style = {styles.addEventText}> Add event </Text>
          
      </View>

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
       

      <View style={styles.boxedText}>
        
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
          //onPress = {savePressed}

        />
      </View>


    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: 'black',
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
  
  outfitButton : {
    fontSize : 20,
    fontWeight : "bold",
    color: 'white',
    backgroundColor : '#16579c'

  },
  
  saved : {
    fontSize : 20,
    alignContent :  'center',
    fontWeight : "bold",
    color: '#f7f7f7',
    backgroundColor : '#16579c', 
    width: 300,
    borderRadius : 10,
  }

});
