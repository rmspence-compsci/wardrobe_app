import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

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
        top:15,
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemText: {
        
        alignSelf: 'center',
        top: 20,
        fontSize: 16,
        fontWeight: 'bold'
    },
    itemLeft: {
        flexDirection: 'row', // Display text in horizontal direction
        alignItems: 'center',
        flexWrap: 'wrap', // wraps to next line if text is too long
        
    },
    


})

export default AttributeBox;