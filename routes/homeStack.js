import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import AddClothes from '../screens/addClothes.js';
import Recommended from "../screens/recommended.js";
import Weather from '../screens/weather.js';
import SavedOutfits from "../screens/savedOutfits.js";
import Calendar from "../screens/calendar.js";

const screens = {
    Recommended: {
        screen: Recommended,

    },
    Calendar: {
        screen: Calendar
    },
    AddClothes: {
        screen: AddClothes
    },
    Weather: {
        screen: Weather
    },
    SavedOutfits: {
        screen: SavedOutfits
    }
// ADD TASK TO TRELLO PAGE
}

const homeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#16579c'
        },
        headerTitleStyle: {
            color: '#16579c'
        },
        headerTintColor: 'white'
    }
});

export default createAppContainer(homeStack);