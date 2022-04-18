/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React ,{Component}from 'react'
import {View, Text, Image, StyleSheet,ActivityIndicator} from 'react-native'

// eslint-disable-next-line no-undef
export default class FutureWeather extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: [],
        isLoading: true
      };
    }
  
    async getWeather() {
      try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=53.3498&lon=6.2603&exclude=minutely,hourly&appid=50b857753c980b99f5281bf0531b0e98");
        const json = await response.json();
        console.log(json);
        this.setState({ data: json.daily });
        console.log(json.daily);
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  
    componentDidMount() {
    //   this.getWeather();
    }
  
    render() {
      const { data, isLoading } = this.state;
          
  return (
    
        <View>
            {isLoading ? <ActivityIndicator/> : (

   
      <View>
      {data.map(function(item, idx){
        <View style={styles.FutureDayItemContainer}>
            {/* <Image source={img} style = {styles.image}/> */}
            <View style={styles.FutureInternalContainer}>
                <Text style={styles.Day}>{item.clouds}</Text>
                <Text style={styles.Daytime}>{item.dt}</Text>
                <Text style={styles.Nighttime}>{item.humidity}</Text>
            </View>

        </View>
       })}
      </View>
    
            )}
        </View> 
  );
        
       
        
    }
    
  }

// const FutureDayItem = ({clouds,dt,humidity}) => {
//     const img = {uri:"http://openweathermap.org/img/wn/10d@2x.png"}
//     return (
//         <View style={styles.FutureDayItemContainer}>
//             <Image source={img} style = {styles.image}/>
//             <View style={styles.FutureInternalContainer}>
//                 <Text style={styles.Day}>{clouds}</Text>
//                 <Text style={styles.Daytime}>{dt}</Text>
//                 <Text style={styles.Nighttime}>{humidity}</Text>
//             </View>

//         </View>
//     )
// }

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    },

    FutureDayItemContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginLeft: 5,
    

    },

    FutureInternalContainer: {
        paddingRight: 40,

    },

    Day: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,

    },

    Daytime: {
        fontSize: 15,
        fontWeight: '100',
        textAlign: 'center',
        marginBottom: 10,

    },

    Nighttime: {
        fontSize: 15,
        fontWeight: '100',
        textAlign: 'center',
        marginBottom: 10,

    }

})