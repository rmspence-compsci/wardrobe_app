import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AddClothes from "../addClothes";
import Recommended from "../recommended";

const OutfitStack = createNativeStackNavigator();

export default function Outfit() {
  return (
    <OutfitStack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#16579C" }, headerTintColor: "white" }}>
      <OutfitStack.Screen name="Recommended" component={Recommended} options={{ headerLargeTitle: true }} />
      <OutfitStack.Screen name="AddClothes" component={AddClothes} options={{ headerTitle: "Add Clothes" }} />
    </OutfitStack.Navigator>
  );
}
