import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../../../styles/global";
import themeColor from "../../../../themeColor";
import { screenWidth } from "@/styles/metrics";

//all onpress events contain placeholder functions waiting for navigation to be implemented

export default function SmallCard({ foodName, owner, price, image, onpress }) {
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
        <Text style={{ ...globalStyles.textHeader, textAlign: "left" }}>
          {foodName}
        </Text>
      </View>
      <View style={styles.priceView}>
        <Text style={{ ...globalStyles.textGrey, fontSize: 10 }}>{owner}</Text>
        <Text
          style={{
            ...globalStyles.textBody,
            color: themeColor.primary,
            fontSize: 10,
            letterSpacing: 0.2,
            lineHeight: 10 * 1.2,
          }}
        >
          {price}F
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  smallCardContainer: {
    width: screenWidth* 0.41,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    marginBottom: 10,
    marginRight:20,
    borderColor: "#EFEDED",
    borderRadius: 5,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 15,
  },
  priceView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: 2,
  },
});
