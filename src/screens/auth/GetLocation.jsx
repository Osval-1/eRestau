import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../styles/global";
import themeColor from "../../../themeColor";
import Button from "../../components/button/Button";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GetLocation = () => {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          ...globalStyles.textLarge,
          // color: themeColor.primary,
          textAlign: "center",
          marginBottom: 10,
          // borderWidth:1,
        }}
      >
        Enter Your Location
      </Text>
      <GooglePlacesAutocomplete placeholder="Type a place"/>
      <View style={globalStyles.inputView}>
        <TextInput style={globalStyles.textInput} placeholder="username" />
      </View>
      <Text style={styles.orText}>or</Text>
      <Text style={styles.forgotPass}>Use Your Location</Text>
      {/* <View style={{ flex: 1 }}></View> */}
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
