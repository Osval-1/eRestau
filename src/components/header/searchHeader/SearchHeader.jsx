import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import themeColor from "../../../../themeColor";

import React, { useState } from "react";
import { globalStyles } from "../../../styles/global";

const screenWidth = Dimensions.get("window").width;

export default function SearchHeader() {
  const [placeholder, setPlaceholder] = useState("Search here");
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputView}
          onChangeText={() => setPlaceholder("")}
          autoFocus={true}
        />
        <Text style={styles.positionText}>{placeholder}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    flexDirection: "row",
    width: (screenWidth / 10) * 6,
    borderRadius: 5,
    padding: 4,
    ...globalStyles.textBody,
  },
  text: {
    ...globalStyles.textLarge,
    marginRight: 20,
    padding: 5,
  },
  positionText: {
    position: "absolute",
    top: 10,
    left: 8,
    ...globalStyles.textGrey,
  },
});
