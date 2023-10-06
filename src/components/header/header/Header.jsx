import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/global";

export default function Header({ name, icon }) {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.textLarge}>{name}</Text>
      <TouchableOpacity activeOpacity={0.6}>{icon}</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
