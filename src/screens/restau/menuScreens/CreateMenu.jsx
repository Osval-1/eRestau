import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React,{useState} from "react";
import { globalStyles } from "../../../styles/global";
import themeColor from "../../../../themeColor";
import Button from "../../../components/button/Button";
import { Entypo } from '@expo/vector-icons';
import * as yup from "yup"
import { Formik } from "formik";
import * as ImagePicker from 'expo-image-picker';


export default function CreateMenu() {
  const [image, setImage] = useState(null);
  const uploadImage=()=>{
    const fileName = uri.split('/').pop();
    const fileType = fileName.split('.').pop();
    const formData = new FormData()
    formData.append("image",{
      name: fileName,
      uri:image.uri,
      type: `image/${fileType}`,
    })
  }
  const pickImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
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

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
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
      price: yup
      .number()
      .required("price is required"),
       servings: yup
      .number()
      .required("servings is required")})
  return (
    
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} >
        <Formik 
        
        initialValues={{menuName:'',price:"",servings:"",image}} validationSchema={menuUploadSchema}
        onSubmit={(values)=>{
          
          console.log(values,formData)}}
        >{({handleSubmit,handleBlur,handleChange, values,errors,touched, })=>
         <>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Menu Name"
            style={globalStyles.textInput}
            value={values.menuName}
            onChangeText={handleChange("menuName") }
            onBlur={handleBlur("menuName")}
            />
        </View>
        {touched.username && errors.username && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.username}
                    </Text>
                  )}
        <View style={styles.inputView}>
          <TextInput
            placeholder="Price"
            style={globalStyles.textInput}
            keyboardType="numeric"
            value={values.price}
            onChangeText={handleChange("price") }
            onBlur={handleBlur("price")}
            />
        </View>
        {touched.price && errors.price && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.price}
                    </Text>
                  )}
        <View style={styles.inputView}>
          <TextInput
            placeholder="Servings"
            style={globalStyles.textInput}
            value={values.servings}
            keyboardType="numeric"
            onChangeText={handleChange("servings") }
            onBlur={handleBlur("servings")}
            />
        </View>
        {touched.servings && errors.servings && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.servings}
                    </Text>
                  )}
        <Text style={globalStyles.textGrey}>Upload Image</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.imageView}
          onPress={pickImage}
          >
          {image? <Image source={{ uri: image }} style={{ width: '100%', height: 200,borderRadius:5 }} />:<Entypo name="camera" size={80} color="grey" />}
        </TouchableOpacity>
        <View style={styles.buttonView}>
          <Button
            title={<Text style={globalStyles.textLarge}>Upload</Text>}
            btnWidth="50%"
            onpress={handleSubmit}
            />
        </View>
            </>
          }
            </Formik>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
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
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: themeColor.grey_0,
    marginTop: 10,
    borderRadius:5,
  },
  buttonView: {
    width: "100%",
    position: "absolute",
    bottom:10,
    borderTopColor: themeColor.grey_1,
    alignItems:'center',
  },
});
