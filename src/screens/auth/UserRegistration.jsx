import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import themeColor from "../../../themeColor";
import { globalStyles } from "../../styles/global";
import Button from "../../components/button/Button";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/reducers/authReducer";
import { useToast } from "react-native-paper-toast";
import Loader from "../../components/loader/Loader";

const UserRegistration = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const toaster = useToast();
  const handleSignup = async (data) => {
    try {
      setLoading(true);
      const res = await dispatch(signup(data)).unwrap();
      toaster.show({ message: res.message, type: "success", position: "top" });
    } catch (error) {
      console.log(error);
      toaster.show({ message: error, type: "error", position: "top" });
      toaster.show({ message: error.message, type: "error", position: "top" });
      setLoading(false);
      return;
    }
    navigation.navigate("UserLogin");
    setLoading(false);
  };
  const signupvalidationSchema = yup.object().shape({
    username: yup
      .string()
      .min(
        4,
        ({ min }) => `username must be atleast ${min} number of characters`
      )
      .required("username is required"),
    phone: yup.string().matches(/^(\S+$)/, 'phone number cannot contain blankspaces')
    .required("phone number is reqiured "),
    password: yup
      .string()
      .min(8, ({ min }) => `password must be atleast ${min} characters`)
      .matches(/^(\S+$)/, 'password cannot contain blankspaces')
      .required("password is required"),
    location: yup.string().required("location is required"),
  });
  if (loading) {
    return <Loader />;
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={globalStyles.container}>
        <View style={styles.imageView}>
          <Image
            source={require("../../../assets/images/signup.png")}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={{ ...globalStyles.textLarge, color: themeColor.primary }}>Customer</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Formik
            validationSchema={signupvalidationSchema}
            initialValues={{
              username: "",
              password: "",
              phone: "",
              location: "",
              roles: ["user", "user"],
              //role to be passed to the backend to determine the type of user signing in
            }}
            onSubmit={(values) => handleSignup(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <>
                <View style={globalStyles.form}>
                  <View style={globalStyles.inputView}>
                    <FontAwesome
                      name="user-circle-o"
                      size={24}
                      color={themeColor.primary}
                      style={{ marginRight: 5 }}
                    />
                    <TextInput
                      style={globalStyles.textInput}
                      placeholder="username"
                      value={values.username}
                      onChangeText={handleChange("username")}
                      onBlur={handleBlur("username")}
                    />
                  </View>
                  {touched.username && errors.username && (
                    <Text style={{ fontSize: 10, color: "red",fontFamily:"Montserrat-Regular" }}>
                      {errors.username}
                    </Text>
                  )}
                  <View style={globalStyles.inputView}>
                    <FontAwesome
                      name="phone"
                      size={24}
                      color={themeColor.primary}
                      style={{ marginRight: 5 }}
                    />
                    <TextInput
                      style={globalStyles.textInput}
                      placeholder="phone number"
                      keyboardType="numeric"
                      value={values.phone}
                      onChangeText={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                    />
                  </View>
                  {touched.phone && errors.phone && (
                    <Text style={{ fontSize: 10, color: "red",fontFamily:"Montserrat-Regular" }}>
                      {errors.phone}
                    </Text>
                  )}

                  <View style={globalStyles.inputView}>
                    <FontAwesome
                      name="location-arrow"
                      size={24}
                      color={themeColor.primary}
                      style={{ marginRight: 5 }}
                    />
                    <TextInput
                      style={globalStyles.textInput}
                      placeholder="current address"
                      value={values.location}
                      onChangeText={handleChange("location")}
                      onBlur={handleBlur("location")}
                    />
                  </View>
                  {errors.location && touched.location && (
                    <Text style={{ fontSize: 10, color: "red" ,fontFamily:"Montserrat-Regular"}}>
                      {errors.location}
                    </Text>
                  )}

                  <View style={globalStyles.passwordInputView}>
                    <FontAwesome
                      name="lock"
                      size={24}
                      color={themeColor.primary}
                    />
                    <TextInput
                      style={(globalStyles.textInput, { width: "82%" })}
                      placeholder="*********"
                      secureTextEntry={showPassword ? false : true}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <Ionicons
                        name={showPassword ? "eye-off" : "eye"}
                        size={24}
                        color={themeColor.primary}
                      />
                    </TouchableOpacity>
                  </View>
                  {errors.password && touched.password && (
                    <Text style={{ fontSize: 10, color: "red",fontFamily:"Montserrat-Regular" }}>
                      {errors.password}
                    </Text>
                  )}

                  <Button
                    title={"Sign Up"}
                    onpress={handleSubmit}
                    disabled={!isValid}
                  />
                  <TouchableOpacity
                    onPress={() => navigation.navigate("UserLogin")}
                  >
                    <Text style={styles.haveAccount}>
                      Have an account? Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageView: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 300,
  },
  haveAccount: {
    color: themeColor.primary,
    marginVertical: 10,
    fontWeight: "bold",
    ...globalStyles.textBody,
  },
});

export default UserRegistration;
