import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

// import Navigator from './routes/homeStack';
import Calendar from "./screens/calendar";
import Outfit from "./screens/outfit/outfit";
import Weather from "./screens/weather";

const Tabs = createBottomTabNavigator();

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyBvlOxzl45NMCMOjRWGriBtSMhJvf1Z_hY",
  authDomain: "waredrobefirebase.firebaseapp.com",
  projectId: "waredrobefirebase",
  storageBucket: "waredrobefirebase.appspot.com",
  messagingSenderId: "95522262620",
  appId: "1:95522262620:web:e05b896d95a9021df8e099",
  measurementId: "G-SBQ8LXTH0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/

const tabIcons = {
  Calendar: "calendar-outline",
  Outfit: "shirt-outline",
  Weather: "partly-sunny-outline",
};

const App = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <NavigationContainer>
      <Tabs.Navigator screenOptions={({ route }) => {
        return {
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#16579C", borderBottomWidth: 0 },
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "rgba(255, 255, 255, .6)",
          tabBarIcon: ({ color, size }) => < Ionicons color={color} name={tabIcons[route.name]} size={size} />,
          tabBarLabel: route.name,
          tabBarStyle: { backgroundColor: "#16579C", borderTopWidth: 0 },
        };
      }}>
        <Tabs.Screen name="Outfit" component={Outfit} />
        <Tabs.Screen name="Calendar" component={Calendar} />
        <Tabs.Screen name="Weather"  component={Weather} />
      </Tabs.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default App;
