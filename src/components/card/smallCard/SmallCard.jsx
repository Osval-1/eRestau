import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../../../styles/global";
import themeColor from "../../../../themeColor";
import { useNavigation } from "@react-navigation/native";

//all onpress events contain placeholder functions waiting for navigation to be implemented

export default function SmallCard({
  foodName,
  distance,
  price,
  image,
}) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.smallCardContainer}
      activeOpacity={0.6}
      onPress={() => console.log(foodName)}
    >
      <Image
        source={require("../../../../assets/images/food.jpg")}
        style={styles.image}
      />
      <View>
        <Text style={globalStyles.textHeader}>{foodName}</Text>
      </View>
      <View style={styles.priceView}>
        <Text style={globalStyles.textBody}>{distance}</Text>
        <Text style={{ color: themeColor.primary }}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  smallCardContainer: {
    width: 170,
    backgroundColor: "#fff",
    alignItems: "center",
    gap: 6,
    marginHorizontal: 2,
    marginBottom: 10,
    padding: 8,
    borderWidth:1,
    borderColor:'#EFEDED',
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
