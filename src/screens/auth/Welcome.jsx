import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";
import Button from "../../components/button/Button";
import themeColor from "../../../themeColor";

const Welcome = ({ navigation }) => {
  
  return (
    <View style={globalStyles.container}>
      <Text style={styles.wlcmHeader}>
        Welcome to <Text style={styles.appTitle}>Foodie!</Text>
      </Text>
      <View>
        <Text style={styles.welcomeText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse veniam
          sed atque laudantium quos est, quibusdam necessitatibus ipsam
          corrupti, iure architecto explicabo quia modi aliquid ipsum pariatur,
          numquam consequuntur amet.
        </Text>
      </View>
      <View>
        <Button
          title={"Get Started"}
          btnWidth={"80%"}
          onpress={()=>navigation.navigate("RegisterOption")
        }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wlcmHeader: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
  },
  appTitle: {
    color: themeColor.primary,
  },
  welcomeText: {
    textAlign: "center",
    marginBottom: 20,

  },
});

export default Welcome;
