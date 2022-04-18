import { StyleSheet, View, Text, TextInput, Keyboard, KeyboardAvoidingView, SafeAreaView,Image, Pressable , Button} from 'react-native'
import React, {useState, useEffect} from 'react'; // Hook for functional components
import Attribute from '../components/Stats';
import {nameArray, typeImages} from './addClothes.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

// Hard coded attribute variable names
let a1 = 'Overall Score';
let a2 = 'Warmth';
let a3 = 'Wind';
let a4 = 'Rain';



const PastOutfits = () => {


    const [titleText, setTitleText] = useState("Default Title"); // Takes in name of state, function used to set state
    const [avgScore, setAvgScore] = useState(0 );
    const [warmthScore,setWarmthScore] = useState(0);
    const [windscore,setWindScore] = useState(0 );
    const [rainScore,setRainScore] = useState(0 );

    // Not used atm
    const updateScoring = enteredScore => {
        setScoringText(n1);
    };

    const updateTitle = enteredValue => {
        setTitleText(enteredValue);
    };
    
     // Fuction to read clothing pieces saved
    const loadingHandler = async () => {
        try{
        for (let i = 0; i < nameArray.length; i++){
            const jsonValue = await AsyncStorage.getItem(nameArray[i])
            console.log(jsonValue)
        }
        } catch (e){
            
        } 
    }

    componentWillmount
      
    return(
        <SafeAreaView style={styles.container}>
            
            {/* Title */}
            <View style={styles.titleView}>
                <Button onPress={loadingHandler} title="Yo" color={Platform.OS == 'android' ? '#16579c' : 'white' }/>
                {/* <TextInput
                    style={styles.titleText}
                    value={titleText}
                    onChangeText={updateTitle}
                /> */}
            </View>

            {/* Image Goes here */}
            <View style={styles.outfitBox}>
                <Text style={styles.boxText}>placeholder</Text>
            </View>

            

            {/* Attribute Values goes here */}
            <Attribute text={a1} scoring={scoringText}/>
            <Attribute text={a2} scoring={scoringText}/>
            <Attribute text={a3} scoring={scoringText}/>
            <Attribute text={a4} scoring={scoringText}/>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        opacity: 1,
        backgroundColor: '#16579c',
    },
    titleView: {
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    titleText: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        maxWidth: '80%',
    },
    outfitBox: {
        marginTop: 20,
        marginBottom:40,
        width: 335,
        height: 335,
        backgroundColor: '#FFFFFF',
        opacity: 1, // May change image opacity
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    boxText: {
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center',
        maxWidth: '80%',
    },
    
});

export default PastOutfits;