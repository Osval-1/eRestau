import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import themeColor from "../../../../themeColor";

import React, { useState } from "react";
import { globalStyles } from "../../../styles/global";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../../redux/reducers/user/userReducer";



const screenWidth = Dimensions.get("window").width;

export default function SearchHeader() {
    const [placeholder, setPlaceholder] = useState("Search here");
    const [inputText, setInputText] = useState('')
    const dispatch = useDispatch();
    const handleSearch = async (data) => {
      try {
          // setLoading(true);
          console.log(inputText)
          const response = await dispatch(search(inputText)).unwrap();
          console.log(response)
      } catch (error) {
        console.log(error);
        // toaster.show({ message: error, type: "error", position: "top" });
        // toaster.show({ message: error.message, type: "error", position: "top" });
        // setLoading(false);
      }
    //   setLoading(false);
    };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput
                  style={styles.inputView}
                  value={inputText}
                  onChangeText={(value) =>{ 
                      setInputText(value)
                      setPlaceholder("")}
                  }
          autoFocus={true}
        />
        <Text style={styles.positionText}>{placeholder}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.6} onPress={()=>handleSearch()}>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    flexDirection: "row",
    width: (screenWidth / 10) * 6,
    borderRadius: 5,
    padding: 4,
    ...globalStyles.textHeader,
  },
  text: {
    ...globalStyles.textLarge,
    marginRight: 20,
    padding: 5,
  },
  positionText: {
    position: "absolute",
    top: 10,
    left: 8,
    ...globalStyles.textGrey,
  },
});
