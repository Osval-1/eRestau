import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import themeColor from "../../../themeColor";
import { EvilIcons } from '@expo/vector-icons';
import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { globalStyles } from "../../styles/global";

export default function NotificationTile({ head, body,onpress,icon,label }) {
  return (
    // <View style={styles.container}>
    //     <View>
    //   <Text style={globalStyles.textHeader}>{head}</Text>
    //     </View>
    //     <View>
    //   <Text>{body}</Text>
    //     </View>
    // </View>
    <TouchableOpacity
    // activeOpacity={0.6}
    style={styles.tileContainer}
    onPress={onpress}
    delayPressIn={50}
  >
    <View><FontAwesome name="user-circle" size={48} color="grey" /></View>
    <View style={styles.textView}>
      <Text style={globalStyles.textHeader}>{head}</Text>
      <Text style={globalStyles.textBody}>{body}</Text>
    </View>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     borderTopWidth:1,
//     padding:10,

//   },
tileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    width: "100%",
  },
  textView: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: themeColor.grey_1,
    gap: 2,
    paddingVertical: 10,
  },
});
