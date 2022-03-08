import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import AddClothes from '../screens/addClothes'
import Recommended from "../screens/recommended";
import PastOutfits from "../screens/pastOutfits";

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
    
    PastOutfits: {
        screen: PastOutfits,
        navigationOptions: {
            headerShown: false
        }
    }

}

const homeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'lightblue'
        }
    }
});

export default createAppContainer(homeStack);