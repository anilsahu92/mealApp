import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesList from "./sceens/CategoriesList";
import FoodList from "./sceens/FoodList";
import FoodDetails from "./sceens/FoodDetails";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#89b5fa" />
      <NavigationContainer initialRouteName="Categories">
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#356abd" },
            headerTintColor: "#fff",
            contentStyle: { backgroundColor: "#e6eefc" },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesList}
            options={{ title: "All Category" }}
          />
          <Stack.Screen name="FoodList" component={FoodList} />
          <Stack.Screen name="Food Info" component={FoodDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
