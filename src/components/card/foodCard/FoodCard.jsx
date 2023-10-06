import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import themeColor from "../../../../themeColor";
import { globalStyles } from "../../../styles/global";

export default function FoodCard({
  amount,
  label,
  price,
  servings,
  expectedTime,
  userName,
  location,
  date,
  currentStatus,
  
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.cardView}>
      <View style={styles.imageView}>
        <Image
          source={require("../../../../assets/images/food.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.textView}>
        <Text style={globalStyles.textHeader}>
          {amount}  
          {label}
        </Text>
        {price && <Text style={themeColor.primary}>{price}</Text>}
        {servings && <Text style={{ color: themeColor.primary }}>{servings}</Text>}
        {date && <Text style={globalStyles.textGrey}>{date}</Text>}
        {expectedTime && (
          <Text style={globalStyles.textGrey}>{expectedTime}</Text>
        )}
        {userName && <Text style={globalStyles.textGrey}>{userName}</Text>}
        {location && (
          <Text style={{ color: themeColor.primary }}>{location}</Text>
        )}
        {currentStatus && (
          <Text style={{ color: themeColor.primary }}>{currentStatus}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.iconView}>
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: themeColor.grey_1,
    height: 120,
  },
  imageView: {
    width: "40%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textView: {
    justifyContent: "space-evenly",
    paddingTop: 5,
    gap: 1,
  },
  iconView: {
    paddingTop: 15,
    paddingRight: 10,
  },
});
