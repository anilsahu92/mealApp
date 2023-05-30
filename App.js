import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackMenu from "./navs/Stack";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#89b5fa" />
      <NavigationContainer>
        <StackMenu />
      </NavigationContainer>
    </>
  );
}
