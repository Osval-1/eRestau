import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../../../styles/global";
import themeColor from "../../../../themeColor";

//all onpress events contain placeholder functions waiting for navigation to be implemented

export default function SmallCard({
  foodName,
  distance,
  price,
  image,
  onpress,
}) {
  return (
    <TouchableOpacity
      style={styles.smallCardContainer}
      activeOpacity={0.6}
      onPress={onpress}
      delayPressIn={50}
      //delayPressIn ={50} to delay the touchableOpacity from highlighting on scrolling
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View>
        <Text style={{ ...globalStyles.textHeader,textAlign:'left' }}>{foodName}</Text>
      </View>
      <View style={styles.priceView}>
        <Text style={globalStyles.textBody}>{distance}</Text>
        <Text style={{ ...globalStyles.textBody, color: themeColor.primary }}>
          {price}FCFA
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  smallCardContainer: {
    width: 170,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    gap: 6,
    marginHorizontal: 2,
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: "#EFEDED",
    borderRadius: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 5,
  },
  priceView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
