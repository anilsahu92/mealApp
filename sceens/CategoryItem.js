import { Pressable, StyleSheet, Text, View } from "react-native";
import { STYLES } from "../assets/css/commonStyles";
import { useNavigation } from "@react-navigation/native";

export default function CategoriesItem({ data }) {
  const navigation = useNavigation();
  const categoryHandler = () => {
    //console.log("details", data.id);
    navigation.navigate("FoodList", { id: data.id, title: data.title });
  };

  return (
    <View style={[styles.itemOuter, { backgroundColor: data.color }]}>
      <Pressable
        style={({ pressed }) => [
          STYLES.FLEX_1,
          pressed ? styles.pressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={categoryHandler}
      >
        <View style={[styles.item]}>
          <Text style={styles.itemText}>{data.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  itemOuter: {
    flex: 1,
    margin: 10,
    height: 120,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black", //ios
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    overflow: "hidden",
  },
  item: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  itemText: {
    color: "#000",
    fontWeight: 800,
  },
  pressed: { opacity: 0.5 },
});
