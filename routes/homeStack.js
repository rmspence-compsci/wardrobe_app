import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import AddClothes from '../screens/addClothes.js';
import Recommended from "../screens/recommended.js";
import Weather from '../screens/weather.js';
import SavedOutfits from "../screens/savedOutfits.js";

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
    SavedOutfits: {
        screen: SavedOutfits
    }
// ADD TASK TO TRELLO PAGE
}

const homeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#4e94df'
        }
    }
});

export default createAppContainer(homeStack);