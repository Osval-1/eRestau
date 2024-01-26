import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
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
import VerificationAlertModal from "../../../components/modals/verificationAlert/VerificationAlertModal";


const screenWidth = Dimensions.get("window").width;

export default function CreateMenu({ navigation }) {

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [catError , setCatError ] = useState(false)
  const [category, setCategory] = useState("");
  const [modal, setModal] = useState(false)
  

  const dispatch = useDispatch();
  const toaster = useToast();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    // console.log(category);
  });

  const uploadImage = async (data) => {
   
    setCatError(false)
    
    if(!category){
      setCatError(true)
      return 
    }
    const formData = new FormData();
    formData.append("image", {
      uri: image,
      type: "image/jpeg",
      name: `${data.menuName}.jpeg`,
    });
    formData.append("price", data.price);
    formData.append("category",category);
    formData.append("name", data.menuName);
    formData.append("username", user.username);

    // console.log(formData);
    try {
      setLoading(true);
      const response = await dispatch(addSingleMenu(formData)).unwrap();
      console.log(response)
      if(response.res.error){
      toaster.show({ message:response.res.error, type: "error", position: "top" });
      }else if(response) {
        toaster.show({
          message: "Menu Created",
          type: "success",
          position: "top",
        });
      }
      navigation.goBack();
    } catch (error) {
      console.log(error);
      toaster.show({ message: error, type: "error", position: "top" });
      if (error.message) {
        console.log(error.message)
        toaster.show({
          message: "No Internet,Please check your connection!",
          type: "error",
          position: "top",
        });
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
    // category: yup.string().required("please choose a category"),
  });

  const CheckedOption = (props) => (
    <MenuOption
      onSelect={() => setCategory(props.label)}
      customStyles={{
        optionWrapper: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          borderRadius: 5,
          // top:10,
          elevation: 1,
          backgroundColor: "#fff",
          width: screenWidth * 0.9,
        },
      }}
    >
      <Text
        style={{
          fontFamily: "Montserrat-SemiBold",
          width: screenWidth * 0.9,
          padding: 5,
        }}
      >
        {props.label}
      </Text>
    </MenuOption>
  );

  if (loading) return <Loader />;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Formik
        initialValues={{ menuName: "", price: "", category:category }}
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
            <Menu>
              <MenuTrigger
                customStyles={{
                  triggerWrapper: {
                    top: 5,
                    // right: 10,
                    width: screenWidth * 0.93,
                    backgroundColor: themeColor.grey_0,
                    borderRadius: 5,
                    padding: 8,
                  },
                }}
              >
                  {/* <TextInput
                placeholder="Servings"
                style={globalStyles.textInput}
                value={values.servings}
                keyboardType="numeric"
                onChangeText={handleChange("servings")}
                onBlur={handleBlur("servings")}
              /> */}
                  {category ? (
                    <Text>{category}</Text>
                  ) : (
                    <Text style={globalStyles.textGrey}>Category</Text>
                  )}
              </MenuTrigger>
              <MenuOptions>
                <CheckedOption label="all" />
                <CheckedOption label="salad" />
                <CheckedOption label="local" />
                <CheckedOption label="pizza" />
                <CheckedOption label="burgers" />
                <CheckedOption label="sandwich" />
                <CheckedOption label="snacks" />
              </MenuOptions>
            </Menu>

            {catError&& (
              <Text
                style={{
                  fontSize: 10,
                  color: "red",
                  fontFamily: "Montserrat-Regular",
                }}
              >
                please choose a category
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
