import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Dark dark blue #274463
// Blue #16579c
// Pale Blue #4e94df

const Attribute = (props) => {
    return(
        <View style={styles.attribute}>
            <View style={styles.attributeleft}>
                <Text style={styles.attributeText}>{props.text}</Text>
            </View>
            <View style={styles.attributeRight}>
                <Text style={styles.attributeText}>{props.scoring}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    attribute:{
        height: 50,
        width: 300,
        padding: 15,
        backgroundColor: '#FFFFFF', // Specify color
        borderRadius: 15, // Smooths out corners 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 45,
    },
    attributeleft:{
        flexDirection: 'row', // Display text in horizontal direction
        alignItems: 'center',
        flexWrap: 'wrap', // wraps to next line if text is too long
    },
    square:{
        width: 20,
        height: 20,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 6,
        marginRight: 15, // Spaces out Square from text
    },
    attributeText:{
        fontFamily: "Futura",
        fontSize: 16,
        
    },
    attributeRight:{
        flexDirection: 'row', // Display text in horizontal direction
        alignItems: 'center',
        flexWrap: 'wrap', // wraps to next line if text is too long
    }
})

export default Attribute