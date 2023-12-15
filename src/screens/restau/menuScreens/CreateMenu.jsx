import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../../styles/global";
import themeColor from "../../../../themeColor";
import Button from "../../../components/button/Button";
import { Entypo } from "@expo/vector-icons";
import * as yup from "yup";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { addSingleMenu } from "../../../redux/reducers/restau/menuReducer";
import Loader from "../../../components/loader/Loader";
import { useToast } from "react-native-paper-toast";


export default function CreateMenu({ navigation }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const toaster = useToast();
  const user = useSelector((state) => state.auth.user);

  const uploadImage = async (data) => {
    const formData = new FormData();
    formData.append("image", {
      uri: image,
      type: "image/jpeg",
      name: `${data.menuName}.jpeg`,
    });
    formData.append("price", data.price);
    formData.append("quantity", data.servings);
    formData.append("name", data.menuName);
    formData.append("username", user.username);

    console.log(formData);
    try {
      setLoading(true);
      const response = await dispatch(addSingleMenu(formData)).unwrap();
      if (response){
        toaster.show({ message:"Menu Created", type: "success", position: "top" });
      }
      navigation.goBack();
    } catch (error) {
      console.log(error);
      toaster.show({ message: error, type: "error", position: "top" });
      if(error.message){
        toaster.show({ message:"No Internet,Please check your connection!", type: "error", position: "top" });
      }

    }
    setLoading(false);
  };
  const pickImage = async () => {
    try {
      let permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(user.username)
      if (!result.canceled) {
        setImage(result.assets[0].uri);
        
       
      }
    } catch (error) {
      console.log(error);
    }
  };
  const menuUploadSchema = yup.object().shape({
    menuName: yup
      .string()
      .min(
        4,
        ({ min }) => `menuName must be atleast ${min} number of characters`
      )
      .required("menuName is required"),
    price: yup.number().required("price is required"),
    servings: yup.number().required("servings is required"),
  });
  if (loading) return <Loader />;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Formik
        initialValues={{ menuName: "", price: "", servings: "" }}
        validationSchema={menuUploadSchema}
        onSubmit={(values) => uploadImage(values)}
      >
        {({
          handleSubmit,
          handleBlur,
          handleChange,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Menu Name"
                style={globalStyles.textInput}
                value={values.menuName}
                onChangeText={handleChange("menuName")}
                onBlur={handleBlur("menuName")}
              />
            </View>
            {touched.menuName && errors.menuName && (
              <Text
                style={{
                  fontSize: 10,
                  color: "red",
                  fontFamily: "Montserrat-Regular",
                }}
              >
                {errors.menuName}
              </Text>
            )}
            <View style={styles.inputView}>
              <TextInput
                placeholder="Price"
                style={globalStyles.textInput}
                keyboardType="numeric"
                value={values.price}
                onChangeText={handleChange("price")}
                onBlur={handleBlur("price")}
              />
            </View>
            {touched.price && errors.price && (
              <Text
                style={{
                  fontSize: 10,
                  color: "red",
                  fontFamily: "Montserrat-Regular",
                }}
              >
                {errors.price}
              </Text>
            )}
            <View style={styles.inputView}>
              <TextInput
                placeholder="Servings"
                style={globalStyles.textInput}
                value={values.servings}
                keyboardType="numeric"
                onChangeText={handleChange("servings")}
                onBlur={handleBlur("servings")}
              />
            </View>
            {touched.servings && errors.servings && (
              <Text
                style={{
                  fontSize: 10,
                  color: "red",
                  fontFamily: "Montserrat-Regular",
                }}
              >
                {errors.servings}
              </Text>
            )}
            <Text style={globalStyles.textGrey}>Upload Image</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.imageView}
              onPress={pickImage}
            >
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{ width: "100%", height: 200, borderRadius: 5 }}
                />
              ) : (
                <Entypo name="camera" size={80} color="grey" />
              )}
            </TouchableOpacity>
            <View style={styles.buttonView}>
              <Button
                title={<Text style={globalStyles.textLarge}>Upload</Text>}
                btnWidth="50%"
                onpress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  inputView: {
    width: "93%",
    backgroundColor: themeColor.grey_0,
    borderRadius: 5,
    padding: 4,
  },
  imageView: {
    width: "93%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themeColor.grey_0,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonView: {
    width: "100%",
    position: "absolute",
    bottom: 10,
    borderTopColor: themeColor.grey_1,
    alignItems: "center",
  },
});
