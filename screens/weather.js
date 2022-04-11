/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import Datetime from '../components/Datetime';
import WeatherScroll from '../components/WeatherScroll'

export default class App extends Component {
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
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      
          // eslint-disable-next-line react-native/no-inline-styles
          <View style={{flex: 1,
            backgroundColor: '#fff',
            padding: 15}}>
          {isLoading ? <ActivityIndicator/> : (
          <View>
          <Text style={{color: 'black',
      fontSize: 36,
      fontWeight: 'bold',
      maxWidth: '80%',}}>Good morning,</Text>
              <Text style={{color: 'black',
      fontSize: 36,
      fontWeight: 'bold',
      maxWidth: '80%',}}>Max.</Text>
      
              <Datetime current={data.current} timezone={data.timezone}/>  
              <WeatherScroll weatherData={data.daily}/> 

          </View>
        )}
      
              
      
          </View>
          
        );
  }
  
}

// export default function App() {
//   const [data, setData] = useState({});

//   const fetchapi = async (latitude, longitude) => {
//     await getWeather(latitude, longitude)
//     .then(repsonseData => {
//       setData(repsonseData);
//       console.log(repsonseData)
//     })
//     .catch(err => console.log(err))
      
//   }

//   useEffect(() => {
//     fetchapi('53.3498', '6.2603')
//   }, [])
  

  

//   return (
//     <View style={styles.container}>

//         <Text style={styles.Hello}>Good morning,</Text>
//         <Text style={styles.name}>Max.</Text>

//         <Datetime current={data.current} timezone={data.timezone}/>  
//         <WeatherScroll weatherData={data.daily}/> 

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   // eslint-disable-next-line react-native/no-color-literals
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 15
    
//   },

//   // eslint-disable-next-line react-native/no-color-literals
//   Hello: {
//     color: 'black',
//     fontSize: 36,
//     fontWeight: 'bold',
//     maxWidth: '80%',
//   },
  
//   // eslint-disable-next-line react-native/no-color-literals
//   name: {
//     color: 'black',
//     fontSize: 36,
//     fontWeight: 'bold',
//     maxWidth: '80%',
//   }
// });
