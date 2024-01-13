import { Text, StyleSheet, View, Image,TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const RestauDashboardHeader = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={require("../../../../assets/images/eRestau-icon.png")}
          style={styles.image}
        />
      </View>
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
  );
};

export default RestauDashboardHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  imageView: {
    width: 100,
    heidht: 100,
    marginLeft:-35
  },
  image: {
    width: "100%",
    height: "100%",
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
