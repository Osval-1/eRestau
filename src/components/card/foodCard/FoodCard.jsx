import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import themeColor from "../../../../themeColor";
import { globalStyles } from "../../../styles/global";
import config from "../../../../project.config";


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
  image
  
}) {
  // `${config.ENDPOINT}/${image}`
  return (
    <View style={styles.cardView}>
      <View style={styles.imageView}>
        <Image
          source={{uri:`${config.ENDPOINT}/`+image}}
          style={styles.image}
          />
      </View>
      <View style={styles.textView}>
          <View style={styles.text}>
        <Text style={globalStyles.textHeader}>
          {amount}  
          {label}
        </Text>
        {price && <Text style={{...globalStyles.textBody,color:themeColor.primary}}>{price} FCFA</Text>}
        {servings && <Text style={{...globalStyles.textGrey }}>{servings} servings</Text>}
        {date && <Text style={globalStyles.textGrey}>{date}</Text>}
        {expectedTime && (
          <Text style={globalStyles.textGrey}>{expectedTime} mins</Text>
        )}
        {userName && <Text style={globalStyles.textGrey}>{userName}</Text>}
        {location && (
          <Text style={{...globalStyles.textBody, color: themeColor.primary }}>{location}</Text>
        )}
        {currentStatus && (
          <Text style={{ color: themeColor.primary }}>{currentStatus}</Text>
        )}

        </View>
        <View>
      <TouchableOpacity style={styles.iconView} delayPressIn={ 50 }>
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
    height: 120,
  },
  imageView: {
    flex:2,
    width: "40%",

  },
  image: {
    width: "100%",
    height: "85%",
    borderRadius:5,

  },
  textView: {
    flex:3,
    flexDirection:'row',
    justifyContent: "space-between",
  },text:{
    gap:2
  }
});
