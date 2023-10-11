import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import themeColor from "../../../../themeColor";
import { globalStyles } from "../../../styles/global";
import FoodCard from "../../../components/card/foodCard/FoodCard";
import { useNavigation } from "@react-navigation/native";

export default function Menu() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <AntDesign name="search1" size={20} color={themeColor.grey_1} />
            <TextInput
              placeholder="Search Restaurants..."
              style={{ width: "60%" }}
              onChangeText={(value) => console.log(value)}
            />
          </View>
          <FoodCard
            label="Roasted Tilapia"
            servings="15 servings"
            price="5000 CFA"
          />
          <FoodCard
            label="Roasted Tilapia"
            servings="15 servings"
            price="5000 CFA"
          />
          <FoodCard
            label="Roasted Tilapia"
            servings="15 servings"
            price="5000 CFA"
          />
          <FoodCard
            label="Roasted Tilapia"
            servings="15 servings"
            price="5000 CFA"
          />
          <FoodCard
            label="Roasted Tilapia"
            servings="15 servings"
            price="5000 CFA"
          />
          <FoodCard
            label="Roasted Tilapia"
            servings="15 servings"
            price="5000 CFA"
          />
          <FoodCard
            label="Roasted Tilapia"
            servings="15 servings"
            price="5000 CFA"
          />
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
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 5,
    backgroundColor:themeColor.grey_0,
    padding: 4,
    marginVertical: 10,
  },
  buttonView: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 1000,
  },
});
