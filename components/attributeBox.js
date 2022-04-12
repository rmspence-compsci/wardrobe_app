import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AttributeBox = (props) => {
    return (
        <View>
            
            <Text style={styles.attributeText}>{props.atrValue}</Text>
            <Text style={styles.itemText}>{props.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    

    attributeText:{
        alignSelf: 'center',
        top:10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemText: {
        
        alignSelf: 'center',
        top: 22,
        fontSize: 16,
        fontWeight: 'bold'
    },

    circular: {
        width: 12,
        height: 12,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5,
    },


})

export default AttributeBox