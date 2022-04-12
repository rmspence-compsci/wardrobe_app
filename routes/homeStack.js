import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import AddClothes from '../screens/addClothes.js';
import Recommended from "../screens/recommended.js";
import Weather from '../screens/weather.js';
import SavedOutfits from "../screens/savedOutfits.js";
import Calendar from "../screens/calendar.js";
import AddEvent from "../screens/addEvent.js";

// This page is the navigation between current pages
// Recommended is the bottom of the stack, and every
// screen after it can be placed on top of recommended in 
// the stack. Basically, any page that is lower on the 
// screen must be accessed by a page higher on the screen

const screens = {
    Recommended: {
        screen: Recommended,

    },
    Calendar: {
        screen: Calendar
    },
    AddEvent: {
        screen: AddEvent
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