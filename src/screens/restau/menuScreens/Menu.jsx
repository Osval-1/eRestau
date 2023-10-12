import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React,{useEffect} from "react";
import { AntDesign } from "@expo/vector-icons";
import themeColor from "../../../../themeColor";
import FoodCard from "../../../components/card/foodCard/FoodCard";
import { useDispatch, useSelector } from "react-redux";

export default function Menu({navigation}) {
  const menu = useSelector((state) => state.menu);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {menu.map((items) => {
            return (
              <FoodCard
                key={items.id}
                label={items.label}
                servings={items.servings}
                price={items.price}
              />
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.buttonView}
        onPress={() =>
          navigation.navigate("MenuStack", { screen: "Create Menu" })
        }
      >
        <AntDesign name="pluscircle" size={60} color={themeColor.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  buttonView: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 1000,
  },
});
