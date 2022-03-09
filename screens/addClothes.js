import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, SafeAreaView, Image } from "react-native";
import { SketchPicker } from 'react-color';

const AddClothes = () => {
  const [selectedValue, setSelectedValue] = useState("hat");
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.addclothesSection}>
        <Text style={styles.addclothesText}>
          Add Clothes
        </Text>
      </View>

      <View style={styles.clothes}>
      <View style={{
          backgroundColor: '#FFFFFF',
          width: 200,
          height: 200,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: "center",
        }}>
        <Image 
            source={require('../assets/beanie.png')}
            style={styles.hat} 
          />
        </View>
      </View>

      <View style={styles.picker}>
        <View style={{
          backgroundColor: '#FFFFFF',
          width: 200,
          height: 47,
          borderRadius: 10,
          justifyContent: 'center',
          fontSize: 20,
        }}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Hat" value="hat" />
            <Picker.Item label="Coat" value="coat" />
            <Picker.Item label="Layer" value="layer" />
            <Picker.Item label="Under Garment" value="under" />
            <Picker.Item label="Pants" value="pants" />
            <Picker.Item label="Shoes" value="shoes" />
          </Picker>
        </View>
      </View>

      <View style={styles.colour}>
        <View style={{
          backgroundColor: '#FFFFFF',
          width: 335,
          height: 47,
          borderRadius: 10,
          justifyContent: 'center',
        }}>
        <Text style={styles.rgb}>Select a Main colour</Text>
        </View>
      </View>

      <View style={styles.boxedText}>
        <View style={{
          backgroundColor: '#FFFFFF',
          width: 335,
          height: 47,
          borderRadius: 10,
          justifyContent: 'center',
          marginTop: 15
        }}>
          <Text style={styles.text}>Warmth                                          /10</Text>
        </View>
      </View>

      <View style={styles.boxedText}>
        <View style={{
          backgroundColor: '#FFFFFF',
          width: 335,
          height: 47,
          borderRadius: 10,
          justifyContent: 'center',
          marginTop: 15
        }}>
          <Text style={styles.text}>Wind                                               /10</Text>
        </View>
      </View>

      <View style={styles.boxedText}>
        <View style={{
          backgroundColor: '#FFFFFF',
          width: 335,
          height: 47,
          borderRadius: 10,
          justifyContent: 'center',
          marginTop: 15
        }}>
          <Text style={styles.text}>Rain                                                /10</Text>
        </View>
      </View>

      <View style={styles.boxedText}>
        <View style={{
          backgroundColor: '#6F99C5',
          width: 200,
          height: 47,
          borderRadius: 10,
          justifyContent: 'center',
          marginTop: 18
        }}>
          <Text style={styles.textSave}>Save</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#274463',
  },
  clothes: {
    alignItems: "center",
    paddingTop: 15,
  },
  hat: {
    backgroundColor: '#FFFFFF',
    height:150,
    width:150,
  },
  picker: {
    paddingTop: 15,
    alignItems: "center",
  },
  addclothesSection: {
    //flex: 1,
    paddingTop: 20,
    alignItems: "center",
  },
  addclothesText: {
    fontSize: 35,
    color: 'white',
  },
  boxedText:{
    //flex: 1,
    alignItems: 'center'
  },
  colour: {
    paddingTop: 15,
    alignItems: 'center',
  },
  rgb: {
    fontSize: 20,
    paddingLeft: 10,
  },
  text: {
    fontSize: 20,
    color: 'black',
    paddingLeft: 10,
  },
  textSave: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  }
});

export default AddClothes;
