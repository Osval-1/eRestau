import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import themeColor from "../../../themeColor";
import { globalStyles } from "../../styles/global";
import { useNavigation } from "@react-navigation/native";


export default function Tile({ label, icon }) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.tileContainer}>
      <View>{icon}</View>
      <View style={styles.textView}>
        <Text style={globalStyles.textHeader}>{label}</Text>
        <Text style={globalStyles.textBody}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    width: "100%",
  },
  textView: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: themeColor.grey_1,
    gap: 2,
    paddingVertical: 10,
  },
});
