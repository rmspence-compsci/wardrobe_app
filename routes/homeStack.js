import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import AddClothes from '../screens/addClothes'
import Recommended from "../screens/recommended";

const screens = {
    Home: {
        screen: Recommended,
        navigationOptions: {
            title: 'Home'
        }
    },
    AddClothes: {
        screen: AddClothes
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