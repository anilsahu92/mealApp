import { StyleSheet, View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
export default function MenuToggle({ back }) {
  const navigation = useNavigation();
  function toggleHandler() {
    console.log("ok", back);
    back
      ? navigation.navigate("FoodList", { id: "c1", title: "starter" })
      : navigation.openDrawer();
  }
  return (
    <View style={styles.menuIconOuter}>
      <Pressable onPress={toggleHandler}>
        {back ? (
          <Ionicons name="ios-arrow-back" size={24} color="white" />
        ) : (
          <Feather name="menu" size={24} color="white" />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuIconOuter: { marginRight: 10, marginLeft: 10 },
});
