import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AddEvent from "./addEvent";
import Calendar from "./calendar";

const CalendarStack = createNativeStackNavigator();

export default function CalendarNavigator() {
  return (
    <CalendarStack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#16579C" }, headerTintColor: "white" }}>
      <CalendarStack.Screen name="Calendar" component={Calendar} options={{ headerLargeTitle: true }} />
      <CalendarStack.Screen name="AddEvent" component={AddEvent} options={{ headerTitle: "Add Event" }} />
    </CalendarStack.Navigator>
  );
}
