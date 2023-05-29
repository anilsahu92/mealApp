import { StyleSheet, Text, View, FlatList } from "react-native";
import { MEALS } from "../data/defaultData";
import { useNavigation, useRoute } from "@react-navigation/native";
import FoodItem from "./FoodItem";
import { useLayoutEffect } from "react";

export default function FoodList() {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();
  const catMeal = MEALS.filter((item) => {
    return item.categoty.indexOf(route.params.id) >= 0;
  });

  function getItem(dataItem) {
    return <FoodItem key={dataItem.item.id} data={dataItem.item}></FoodItem>;
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title === "" ? "No title" : route.params.title,
    });
  }, [navigation, route]);

  return (
    <View>
      {catMeal.length > 0 ? (
        <FlatList
          data={catMeal}
          renderItem={getItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      ) : (
        <Text style={styles.itemText}>No Food Available.</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemText: {
    color: "#000",
    fontWeight: 500,
    textAlign: "center",
    marginTop: 20,
  },
});
