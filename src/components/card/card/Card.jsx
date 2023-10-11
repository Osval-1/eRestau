import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import {
  Entypo,
  Feather,
  EvilIcons,
  FontAwesome,
} from "@expo/vector-icons";
import themeColor from "../../../../themeColor";
import { globalStyles } from "../../../styles/global";

import React from "react";

//all onpress events contain placeholder functions waiting for navigation to be implemented
//delayPressIn ={100} to delay the touchableOpacity from highlighting on scrolling

export default function Card({ onpress,label }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.6}
        onPress={onpress}
        delayPressIn={50}
      >
        <View>
          <Image
            source={require("../../../../assets/images/restaurant.jpg")}
            style={styles.image}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Text style={globalStyles.textHeader}>{label}</Text>
          <View style={styles.spaceText}>
            <View style={styles.spaceText}>
              {/* <EvilIcons name="location" size={24} color="black" /> */}
              <Text>Tarred Malingo</Text>
            </View>
            <View style={styles.spaceText}>
              <FontAwesome name="star" size={20} color="gold" />
              <Text>4.7</Text>
            </View>
          </View>
          <View style={styles.spaceText}>
            <View style={styles.spaceText}>
              {/* <FontAwesome name="road" size={20} color="black" /> */}
              <Text>2.7KM</Text>
            </View>
            <Pressable
              style={styles.spaceText}
              onPress={() => console.log("pressed")}
            >
              {/* <Feather
                name="external-link"
                size={24}
                color={themeColor.primary}
              /> */}
              {/* <Text style={{ color: themeColor.primary }}>Directions</Text> */}
              <Text style={{ color: themeColor.primary }}>2000FCFA</Text>
            </Pressable>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#EFEDED",
  },

  imageView: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  spaceText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
  },
});
