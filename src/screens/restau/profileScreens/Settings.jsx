import { StyleSheet, View } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import Tile from "../../../components/tile/Tile";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Tile
        label="Notifications"
        icon={<Ionicons name="notifications" size={34} color="black" />}
      />
      <Tile
        label="Location"
        icon={<Ionicons name="location" size={34} color="black" />}
      />
      <Tile
        label="Privacy"
        icon={<MaterialIcons name="favorite" size={34} color="black" />}
      />
      <Tile
        label="About"
        icon={<Ionicons name="information-circle" size={34} color="black" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
});
