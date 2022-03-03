import { StyleSheet, View, Text, TextInput, Keyboard, KeyboardAvoidingView, SafeAreaView,Image} from 'react-native'

/* TO-DO
Function to edit name, default name is the date when clicked
Function to edit attributes 
Add Attribute scoring design
How to find image of outfit worn on that day?
*/

const PastOutfits = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.sectionTitle}>Date 12-13-2021</Text>
            </View>
            <View style={styles.outfitBox}>
                <Text style={styles.boxText}>placeholder</Text>
            </View>
            <Text style={styles.attributeTitle}>Attributes</Text>

            <View style={styles.attributeBoxes}><Text style={styles.attributeText}>Score</Text></View>
            <View style={styles.attributeBoxes}><Text style={styles.attributeText}>Warmth</Text></View>
            <View style={styles.attributeBoxes}><Text style={styles.attributeText}>Wind</Text></View>
            <View style={styles.attributeBoxes}><Text style={styles.attributeText}>Rain</Text></View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9EAED',
    },
    titleView: {
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        maxWidth: '90%',
    },
    outfitBox: {
        marginTop: 20,
        width: 335,
        height: 365,
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
    attributeTitle: {
        paddingTop: 10,
        paddingHorizontal: 20,
        fontSize: 28,
        fontWeight: 'bold',
    },
    attributeBoxes: {
        width: 335,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        alignSelf: 'center', // Align boxes to center
        marginTop: 10,
        alignItems: 'center', //Centered vertically
        flex:1,
        flexDirection: 'row', // Display text in horizontal direction
    },
    attributeText: {
        fontSize: 24,
        textAlign:'left',
        marginLeft: 10,
    }

});

export default PastOutfits;