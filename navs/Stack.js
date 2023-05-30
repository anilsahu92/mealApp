import CategoriesList from "../sceens/CategoriesList";
import FoodDetails from "../sceens/FoodDetails";
import FoodList from "../sceens/FoodList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function StackMenu() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#356abd" },
        headerTintColor: "#fff",
        contentStyle: { backgroundColor: "#e6eefc" },
        //headerLeft: () => <MenuToggle back={false} />,
      }}
      initialRouteName="Categories"
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesList}
        options={{ title: "All Category" }}
      />
      <Stack.Screen name="FoodList" component={FoodList} />
      <Stack.Screen name="Food Info" component={FoodDetails} />
    </Stack.Navigator>
  );
}
