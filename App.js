import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, TextComponent } from 'react-native';
import Navigator from './routes/homeStack';
import Recommended from './screens/recommended.js';


const App = () => {
  return (
    <Navigator />
  );
}

export default App;