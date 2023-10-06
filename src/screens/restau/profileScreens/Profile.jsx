import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global";
import Button from "../../../components/button/Button";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import Tile from "../../../components/tile/Tile";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ProfileView}>
        <TouchableOpacity activeOpacity={0.6} style={styles.imageView}>
          <Image
            source={require("../../../../assets/images/restaurant.jpg")}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.infoView}>
          <Text style={globalStyles.textLarge}>Restaurant Name</Text>
          <Text style={[globalStyles.textGrey, globalStyles.textBody]}>
            Tarred Malingo
          </Text>
          <Text style={[globalStyles.textGrey, globalStyles.textBody]}>
            677465347
          </Text>
          <Button
            title={<Text style={globalStyles.textLarge}>Edit</Text>}
            btnWidth="70%"
          />
        </View>
      </View>
      <Tile
        label="Settings"
        icon={<Ionicons name="settings" size={34} color="black" />}
      />
      <Tile
        label="Notifications"
        icon={<Ionicons name="notifications" size={34} color="black" />}
      />
      <Tile
        label="Location"
        icon={<Ionicons name="location" size={34} color="black" />}
      />
      <Tile
        label="Favourites"
        icon={<MaterialIcons name="favorite" size={34} color="black" />}
      />
      <Tile
        label="About"
        icon={<Ionicons name="information-circle" size={34} color="black" />}
      />
      <Tile
        label="Logout"
        icon={<AntDesign name="logout" size={34} color="black" />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  ProfileView: {
    marginVertical: 10,
    padding: 10,
    flexDirection: "row",
    borderBottomWidth: 0.8,
    gap: 20,
  },
  imageView: {
    width: "40%",
  },
  image: {
    width: "100%",
    height: 135,
    borderRadius: 5,
  },
  infoView: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

export default Profile;
