import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import themeColor from "../../../../themeColor";

import React, { useState,useEffect } from "react";
import { globalStyles } from "../../../styles/global";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../../redux/reducers/user/userReducer";
import { clearSearch } from "../../../redux/reducers/user/userReducer";
import { useToast } from "react-native-paper-toast";

const screenWidth = Dimensions.get("window").width;

// TODO 
// re-implement search by category in a more eficeint and clean way
/*  */

export default function SearchHeader() {
  const [placeholder, setPlaceholder] = useState("Search here");
  const [inputText, setInputText] = useState("");

  const toaster = useToast();
  const dispatch = useDispatch();
  const category = useSelector((state) =>
  state.user.category
);

useEffect(()=>{
  if(category){
    setInputText(category)
    setPlaceholder("")
    handleSearch(category)
  }else(
    dispatch(clearSearch())
  )
  console.log(category)
},[])
  const handleSearch = async (data) => {
    try {
      // setLoading(true);
      console.log(inputText);
      const response = await dispatch(search(data)).unwrap();
      console.log(response);
      console.log(response.ok);
    } catch (error) {
      console.log(error);
      toaster.show({ message: "Search failed,please check your internet connection", type: "error", position: "top" });
      if (error.message) {
        toaster.show({
          message: "Search failed,please check your internet connection",
          type: "error",
          position: "top",
        });
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputView}
          value={inputText}
          onChangeText={(value) => {
            setInputText(value);
            setPlaceholder("");
          }}
          autoFocus={true}
        />
        <Text style={styles.positionText}>{placeholder}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.6} onPress={() => handleSearch(inputText)}>
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
