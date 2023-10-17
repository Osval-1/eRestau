import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global";
import Button from "../../../components/button/Button";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import Tile from "../../../components/tile/Tile";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/reducers/authReducer";

const Profile = ({ navigation }) => {
  const user = useSelector((state)=>state.auth.user)
  const dispatch =  useDispatch()
  const handlelogout= async () => {
    try {
       await dispatch(logout()).unwrap();
    } catch (error) {
      console.log(error);
    }
  };


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
          <Text style={globalStyles.textLarge}>{user.username}</Text>
          <Text style={[globalStyles.textGrey, globalStyles.textBody]}>
            {user.location}
          </Text>
          <Text style={globalStyles.textGrey}>
            {user.phone}
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
        onpress={() =>
          navigation.navigate("ProfileStack", { screen: "Settings" })
        }
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
        onpress={handlelogout}

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
