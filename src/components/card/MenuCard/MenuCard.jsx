import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import themeColor from "../../../../themeColor";
import { globalStyles } from "../../../styles/global";
import Button from "../../../components/button/Button";
import { Entypo, Feather, EvilIcons, FontAwesome } from "@expo/vector-icons";

export default function MenuCard({ label, price, image, onpress,location,ownerName }) {
  // this card is the touch responsive version of the foodcard
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onpress}
      delayPressIn={50}
      style={styles.cardView}
    >
      <View style={styles.imageView}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.textView}>
        <Text style={globalStyles.textHeader}>{label}</Text>
        <Text style={{ ...globalStyles.textBody, color: themeColor.primary }}>
          {price}FCFA
        </Text>
        <Text style={globalStyles.textGrey}>{location}</Text>
        <Text style={globalStyles.textGrey}>{ownerName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
    height: 120,
    marginTop:10,
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
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 6,
  },
  // amountView: {
  //   flex: 1,
  //   flexDirection: "column",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   height: "85%",
  //   borderRadius: 5,
  //   borderWidth: 1,
  //   borderColor: "#EFEDED",
  // },
});
