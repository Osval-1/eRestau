import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import themeColor from "../../../../themeColor";
import { globalStyles } from "../../../styles/global";
import Button from "../../../components/button/Button";
import { Entypo, Feather, EvilIcons, FontAwesome } from "@expo/vector-icons";

export default function MenuCard({ icon, label, price, image }) {
  return (
    <View style={styles.cardView}>
      <View style={styles.imageView}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.textView}>
        <Text style={globalStyles.textHeader}>{label}</Text>
        {price && (
          <Text style={{ ...globalStyles.textBody, color: themeColor.primary }}>
            {price}FCFA
          </Text>
        )}
        <Button title="View" btnWidth="100%" />
      </View>
      {/* <View style={styles.amountView}>
          <TouchableOpacity>
            <Entypo name="plus" size={24} color={themeColor.primary} />
          </TouchableOpacity>
          <Text style={globalStyles.textLarge}>2</Text>
          <TouchableOpacity>
            <Entypo name="minus" size={24} color={themeColor.primary} />
          </TouchableOpacity>
        </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
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
    flex: 2,
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 6,
  },
  amountView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "85%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EFEDED",
  },
});
