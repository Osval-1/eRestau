import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/global";
import themeColor from "../../../../themeColor";
import Button from "../../../components/button/Button";
import { Entypo } from '@expo/vector-icons';

export default function CreateMenu() {
 

  return (
    
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} >
        <View style={styles.inputView}>
          <TextInput
            placeholder="Menu Name"
            style={globalStyles.textInput}
            onChangeText={(value) => console.log(value)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Price"
            style={globalStyles.textInput}
            onChangeText={(value) => console.log(value)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Servings"
            style={globalStyles.textInput}
            onChangeText={(value) => console.log(value)}
          />
        </View>
        <Text style={globalStyles.textGrey}>Upload Image</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.imageView}
        >
          <Entypo name="camera" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.buttonView}>
          <Button
            title={<Text style={globalStyles.textLarge}>Upload</Text>}
            btnWidth="50%"
          />
        </View>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  pageView:{
    flex:1,
    alignItems: "center",
  },
  container: {
    flex:1,
    alignItems: "center",
    // justifyContent:'center',
    gap: 10,
    backgroundColor: "#fff",
    paddingTop:60,
  },
  inputView: {
    width:'93%',
    backgroundColor: themeColor.grey_0,
    borderRadius:5,
    padding:4,


  },
  imageView: {
    width: "93%",
    height: 200,
    backgroundColor: themeColor.grey_0,
    marginTop: 10,
    borderRadius:5,
  },
  buttonView: {
    width: "100%",
    position: "absolute",
    bottom:10,
    borderTopWidth: 1,
    borderTopColor: themeColor.grey_1,
    alignItems:'center',
  },
});
