import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import DrawerMenu from "./navs/Draver";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#89b5fa" />
      <NavigationContainer>
        <DrawerMenu />
      </NavigationContainer>
    </>
  );
}
