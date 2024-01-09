import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import themeColor from "../../../../themeColor";
import { globalStyles } from "../../../styles/global";

export default function FoodCard({
  amount,
  label,
  price,
  servings,
  expectedTime,
  ownerName,
  location,
  date,
  currentStatus,
  image,
  popup,
}) {

  //this card is not food responsive
  
  return (
    <View style={styles.cardView}>
      <View style={styles.imageView}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.textView}>
        <View style={styles.text}>
          <Text style={globalStyles.textHeader}>{label}</Text>
          {price && (
            <Text
              style={{ ...globalStyles.textBody, color: themeColor.primary }}
            >
              {price} FCFA
            </Text>
          )}
          {servings && (
            <Text style={{ ...globalStyles.textGrey }}>
              {servings} servings
            </Text>
          )}
          {date && <Text style={globalStyles.textGrey}>{date}</Text>}
          {expectedTime && (
            <Text style={globalStyles.textGrey}>{expectedTime} mins</Text>
          )}
          {ownerName && <Text style={globalStyles.textGrey}>{ownerName}</Text>}
          {location && (
            <Text
              style={{ ...globalStyles.textBody, color: themeColor.primary }}
            >
              {location}
            </Text>
          )}
          {currentStatus && (
            <Text style={{ color: themeColor.primary }}>{currentStatus}</Text>
          )}
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.iconView} delayPressIn={50}>
            {popup}
          </TouchableOpacity>
          {amount && 
          <Text style={styles.amountView}>{amount}</Text>
          }
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
    flex: 2,
    width: "40%",
  },
  image: {
    width: "100%",
    height: "85%",
    borderRadius: 5,
  },
  textView: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    gap: 2,
  },
  amountView: {
    marginBottom: 40,
    marginRight: 15,
    width: 20,
    backgroundColor: themeColor.primary,
    color: "#fff",
    borderWidth: 1,
    borderColor: themeColor.primary,
    borderRadius: 3,
    textAlign: "center",
  },
});
