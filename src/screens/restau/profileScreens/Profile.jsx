import React, { useState } from "react";
import { View, Text,TouchableOpacity, StyleSheet,Linking } from "react-native";
import { globalStyles } from "../../../styles/global";
import Button from "../../../components/button/Button";
import {
  Ionicons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import Tile from "../../../components/tile/Tile";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/reducers/authReducer";
import Loader from "../../../components/loader/Loader";

const Profile = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const loadInBrowser = () => {
    Linking.openURL(
      "https://alzironsystems.com/erestau-remove-user-data/"
    ).catch((err) => console.error("Couldn't load page", err));
  };

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handlelogout = async () => {
    try {
      setLoading(true);
      await dispatch(logout()).unwrap();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.ProfileView}>
        <TouchableOpacity activeOpacity={0.6} style={styles.imageView}>
          <FontAwesome
            name="user-circle"
            size={120}
            color="silver"
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.infoView}>
          <Text
            style={{ ...globalStyles.textLarge, textTransform: "capitalize" }}
          >
            {user.username}
          </Text>
          <Text style={[globalStyles.textGrey, globalStyles.textBody]}>
            {user.location}
          </Text>
          <Text style={globalStyles.textGrey}>{user.phone}</Text>
          <Button
            title={<Text style={globalStyles.textLarge}>Edit</Text>}
            btnWidth="70%"
          />
        </View>
      </View>
      <Tile
        label="Notifications"
        icon={<Ionicons name="notifications" size={34} color="black" />}
        onpress={() =>
          navigation.navigate("ProfileStack", { screen: "Notifications" })
        }
      />
      <Tile
        label="Delete Account"
        icon={
          <FontAwesome5
            name="user-edit"
            size={28}
            color="black"
            adjustToFitSize
          />
        }
        onpress={loadInBrowser}
      />
      <Tile
        label="About"
        icon={
          <Ionicons
            name="information-circle"
            size={34}
            color="black"
            onpress={() =>
              navigation.navigate("ProfileStack", { screen: "About" })
            }
          />
        }
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
