import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import React, { useEffect,useCallback } from "react";
import { AntDesign } from "@expo/vector-icons";
import themeColor from "../../../../themeColor";
import FoodCard from "../../../components/card/foodCard/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { globalStyles } from "../../../styles/global";
import { getMenu } from "../../../redux/reducers/restau/menuReducer";

export default function Menu({ navigation }) {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  
// everytime user navigates to this screen,fetch the menu from server
useFocusEffect(
      useCallback(() => {
        displayMenu()
      }, [dispatch,menu])
    );
  

  const displayMenu = async () => {
    try {
      const response = await dispatch(getMenu()).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {!menu[0] ? (
          <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={globalStyles.textHeader}>No Menu</Text>
              <Text style={globalStyles.textBody}>
                Create a Menu to View Here{" "}
              </Text>
            </View>
          </View>
        ) : (
          <View>
            {menu.map((items) => {
              return (
                <FoodCard
                  key={items._id}
                  label={items.name}
                  servings={items.quantity}
                  price={items.price}
                  image={items.image}
                />
              );
            })}
          </View>
        )}
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
