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
import { globalStyles } from "../../styles/global";
import Button from "../../components/button/Button";
import { Formik } from "formik";
import * as yup from "yup";
import themeColor from "../../../themeColor";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/reducers/authReducer";
import Loader from "../../components/loader/Loader";
import { useToast } from "react-native-paper-toast";
import MessageQueue from "react-native/Libraries/BatchedBridge/MessageQueue";

const UserLogin = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const toaster = useToast();

  const handlesignin = async (data) => {

    try {
      setLoading(true);
      const response = await dispatch(signin(data)).unwrap();     
    } catch (error) {
      console.log(error);
      toaster.show({ message: error.message, type: "error", position: "top" });
      toaster.show({ message: error, type: "error", position: "top" });
      setLoading(false);
    }
    setLoading(false);
  };

  const loginValidatonSchema = yup.object().shape({
    username: yup
      .string()
      .min(
        4,
        ({ min }) => `username must be atleast ${min} number of characters`
      )
      .required("username is required"),
    password: yup
      .string()
      .min(8, ({ min }) => `password must be atleast ${min} characters`)
      .matches(/^(\S+$)/, 'password cannot contain blankspaces')
      .required("password is required"),
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
            source={require("../../../assets/images/login.png")}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={{...globalStyles.textLarge,color:themeColor.primary}}>Login</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => handlesignin(values)}
            validationSchema={loginValidatonSchema}
          >
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              values,
              touched,
              errors,
              isValid,
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
                    <Text style={{ fontSize: 10, color: "red" ,fontFamily:"Montserrat-Regular"}}>
                      {errors.username}
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
                  {touched.password && errors.password && (
                    <Text style={{ fontSize: 10, color: "red",fontFamily:"Montserrat-Regular" }}>
                      {errors.password}
                    </Text>
                  )}
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ForgotPassword")}
                  >
                    <Text style={styles.forgotPass}>Forgot password?</Text>
                  </TouchableOpacity>
                  <Button
                    title={"Log in"}
                    onpress={handleSubmit}
                    disabled={!isValid}
                  />
                  <Text style={styles.orText}>or</Text>
                  <Button
                    title={"Sign Up"}
                    onpress={() => navigation.navigate("RegisterOption")}
                    outlined={true}
                  />
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
  forgotPass: {
    textAlign: "right",
    color: themeColor.primary,
    marginBottom: 10,
    ...globalStyles.textBody,

  },
  orText: {
    textAlign: "center",
    color: themeColor.primary,
    marginTop: 10,
    marginBottom: 10,
    ...globalStyles.textBody,

  },
});

export default UserLogin;
