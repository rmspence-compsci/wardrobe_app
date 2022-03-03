import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import AddClothes from '../screens/addClothes';
import Recommended from "../screens/recommended";
import Weather from '../screens/weather.js';

const screens = {
    Home: {
        screen: Recommended,
        navigationOptions: {
            title: 'Home'
        }
    },
    AddClothes: {
        screen: AddClothes
    },
    Weather: {
        screen: Weather
    },
// ADD TASK TO TRELLO PAGE
}

const homeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'lightblue'
        }
    }
});

export default createAppContainer(homeStack);