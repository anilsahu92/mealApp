import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../sceens/Home";
import About from "../sceens/About";
import StackMenu from "./Stack";

const Drawer = createDrawerNavigator();
export default function DrawerMenu() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#356abd" },
        headerTintColor: "#fff",
        contentStyle: { backgroundColor: "#e6eefc" },
        //headerLeft: () => <MenuToggle back={false} />,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        //options={{ headerShown: false }}
      />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen
        name="CategoriesDraver"
        component={StackMenu}
        options={{ headerShown: false, title: "Categories" }}
      />
    </Drawer.Navigator>
  );
}
