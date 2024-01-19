import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";
import Button from "../../components/button/Button";
import themeColor from "../../../themeColor";

const Welcome = ({ navigation }) => {
  
  return (
    <View style={{...globalStyles.container,paddingHorizontal:10}}>
      <Text style={globalStyles.textLarge}>
        Welcome to <Text style={styles.appTitle}>eRestau!</Text>
      </Text>
      <View>
        <Text style={{...globalStyles.textHeader,textAlign:"center",marginBottom:10,marginTop:20}}>
          #1 Food ordering app in cameroon
        </Text>
        <Text style={styles.welcomeText}>
        Browse diverse cuisines, customize your meal, and place orders with ease.
Enjoy swift delivery to your doorstep and track your order in real-time
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
    marginBottom: 30,
  },
  appTitle: {
    color: themeColor.primary,
  },
  welcomeText: {
    ...globalStyles.textBody,
    textAlign: "center",
    marginBottom: 20,
    letterSpacing:0.2,
    lineHeight:18,
    fontSize:14

  },
});

export default Welcome;
