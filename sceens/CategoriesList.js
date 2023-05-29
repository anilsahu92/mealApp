import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/defaultData";
import CategoriesItem from "./CategoryItem";

export default function CategoriesList() {
  function getItem(dataItem) {
    return <CategoriesItem key={dataItem.item.id} data={dataItem.item} />;
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={getItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
