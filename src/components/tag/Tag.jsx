import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global";
import themeColor from "../../../themeColor";
export default function tag({ label, onpress }) {
  return (
    <View>
      <Pressable
        style={styles.cardHeader}
        // onPress={onpress}
      >
        <View style={styles.tag}>
          <Text
            style={{ color: "#000", ...globalStyles.textLarge, fontSize: 20 }}
          >
            {label}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    paddingVertical: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});
