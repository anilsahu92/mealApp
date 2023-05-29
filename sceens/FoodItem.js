import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { STYLES } from "../assets/css/commonStyles";

export default function FoodItem({ data }) {
  return (
    <View style={styles.itemOuter}>
      <Pressable
        style={({ pressed }) => [
          STYLES.FLEX_1,
          pressed ? styles.pressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={STYLES.FLEX_1}>
          <Image style={styles.image} source={{ uri: data.img }} />
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
    height: 220,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black", //ios
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  item: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    //backgroundColor: "#fff",
  },
  itemText: {
    color: "#000",
    fontWeight: 800,
    textAlign: "center",
    padding: 5,
  },
  image: {
    height: 180,
    width: "100%",
  },
  pressed: { opacity: 0.5 },
});
