import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { STYLES } from "../assets/css/commonStyles";
import { CATEGORIES } from "../data/defaultData";

export default function FoodDetails() {
  const route = useRoute();
  const item = route.params;
  //console.log(route.params);
  const navigation = useNavigation();
  function catName(id) {
    const cat = CATEGORIES.find((item) => item.id === id);
    //console.log(id, cat);
    return cat.title;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.img }} style={styles.img} />
      <Text style={[styles.title, styles.itemText]}>{item.title}</Text>

      <View style={styles.col}>
        <Text style={[styles.itemText, styles.bold]}>Category : </Text>
        <View style={[STYLES.FLEX_1, styles.col]}>
          {item.categoty.map((item, index) => (
            <Text style={styles.cats} key={index}>
              {catName(item)}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.col}>
        <Text style={[styles.itemText, styles.bold]}>Price : </Text>
        <View style={[styles.itemText, STYLES.FLEX_1]}>
          {Object.entries(item.price).map(([key, val], index) => {
            return (
              <View key={index}>
                <Text>
                  {key} : {val}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.col}>
        <Text style={[styles.itemText, styles.bold]}>Details : </Text>
        <Text style={[styles.itemText, STYLES.FLEX_1]}>{item.desciption}</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  col: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 5,
  },
  itemText: {
    color: "#000",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 800,
  },
  bold: {
    fontWeight: 800,
  },
  img: {
    width: "100%",
    height: 250,
    borderRadius: 5,
    marginBottom: 20,
  },
  cats: {
    padding: 3,
    color: "#fff",
    backgroundColor: "#356abd",
    borderRadius: 5,
    marginRight: 5,
  },
});
