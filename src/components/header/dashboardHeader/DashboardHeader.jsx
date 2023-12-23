import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import themeColor from "../../../../themeColor";
import React from "react";
import { globalStyles } from "../../../styles/global";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
export default function DashboardHeader({ onpress }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            source={require("../../../../assets/images/eRestau-icon.png")}
            style={{
              width: 40,
              height: 30,
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={onpress}
          activeOpacity={0.9}
        >
          <AntDesign name="search1" size={20} color={themeColor.grey_1} />
          <Text style={globalStyles.textGrey}>Search </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProfileStack", { screen: "Notifications" });
          }}
        >
          <View style={styles.notificationView}>
            <Text style={styles.notificationText}>1</Text>
          </View>
          <FontAwesome5 name="bell" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    width: screenWidth,
    backgroundColor: "#fff",
    borderBottomWidth: 4,
    borderBottomColor: themeColor.primary,
    paddingHorizontal: 15,
    paddingBottom: 14,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: themeColor.grey_0,
    borderRadius: 5,
    padding: 4,
  },
  notificationView: {
    width: 15,
    height: 15,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    position: "absolute",
    zIndex: 999,
  },
  notificationText: {
    fontSize: 10,
    color: "#fff",
  },
});
