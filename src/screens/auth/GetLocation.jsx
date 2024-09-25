import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../styles/global";
import themeColor from "../../../themeColor";
import Button from "../../components/button/Button";

const GetLocation = () => {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.imageView}>
          <Image
            source={require("../../../assets/images/location.png")}
            style={styles.image}
          />
        </View>
        <Text
          style={{
            ...globalStyles.textLarge,
            color: themeColor.primary,
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Enter Your Location
        </Text>
        <View style={globalStyles.inputView}>
          <TextInput style={globalStyles.textInput} placeholder="username" />
        </View>
        <Text style={styles.orText}>or</Text>
        <Text style={styles.forgotPass}>Use Your Location</Text>
      </KeyboardAvoidingView>
      <View style={{ flex: 1 }}></View>
      <Button
        title={"Continue"}
        onpress={() => navigation.navigate("RegisterOption")}
        btnWidth={"90%"}
      />
    </SafeAreaView>
  );
};

export default GetLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  imageView: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 300,
  },
  forgotPass: {
    textAlign: "center",
    color: themeColor.primary,
    marginBottom: 10,
    ...globalStyles.textBody,
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    color: themeColor.primary,
    marginTop: 10,
    marginBottom: 10,
    ...globalStyles.textBody,
  },
});
