import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../../styles/global";
import themeColor from "../../../../themeColor";
import Button from "../../../components/button/Button";
import { getPaymentInfo } from "../../../redux/reducers/user/cartReducer";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "react-native-paper-toast";
import date from "../../../utils/date";
import dayjs from 'dayjs'

export default function PaymentMethod({ navigation }) {
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const dispatch = useDispatch();
  const toaster = useToast();

  const deliveryInfoValidationSchema = yup.object().shape({
    phone: yup
      .string()
      .matches(/^(\S+$)/, "phone number cannot contain blankspaces")
      .max(9, ({ max }) => `phone number must be atmost ${max} characters`)
      .min(9, ({ min }) => `phone must be atleast ${min} characters`)
      .required("phone number is reqiured "),
  });

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text
          style={{
            ...globalStyles.textHeader,
            textAlign: "center",
            marginBottom: 15,
            fontSize: 16,
          }}
        >
          Select Payment Method
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          // onPress = {()=>setPaymentMethod("MTN")}
          delayPressIn={50}
          //   borderWidth: paymentMethod === "MTN" ? 2 : null,
          style={{...styles.cardView,borderColor: paymentMethod === "MTN" ? themeColor.primary : themeColor.grey_1,}}
        >
          <Image
            source={require("../../../../assets/images/MTNmomo.png")}
            style={styles.image}
          />

          <View style={styles.textView}>
            <Text style={globalStyles.textHeader}>MTN Mobile Money</Text>
            <Text style={{...globalStyles.textBody,color:themeColor.grey_2}}>Coming soon....</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          // onPress = {()=>setPaymentMethod("ORANGE")}
          delayPressIn={50}
          style={{...styles.cardView,borderColor: paymentMethod === "ORANGE" ? themeColor.primary : themeColor.grey_1,}}
        >
          <Image
            source={require("../../../../assets/images/ORANGE.png")}
            style={styles.image}
          />
          <View style={styles.textView}>
            <Text style={globalStyles.textHeader}>Orange Money</Text>
            <Text style={{...globalStyles.textBody,color:themeColor.grey_2}}>Coming soon....</Text>
          </View>
        </TouchableOpacity>
        <Text style={{...globalStyles.textHeader,textAlign:"center",marginBottom:15}}>Cash on Delivery</Text>
        <Formik
            validationSchema={deliveryInfoValidationSchema}
            initialValues={{
              phone: "",
            }}
            onSubmit={(values) =>{
              if (values.phone) {
                dispatch(
                  getPaymentInfo({
                    paymentMethod,
                    phone:values.phone,
                    date:date()
                  })
                  );
                  navigation.navigate("Payment Review");
                } else {
                toaster.show({
                  message: "Please fill in all required information",
                  type: "error",
                  position: "top",
                });
              }
            }}
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
        <View style={globalStyles.inputView}>
          <TextInput
            style={globalStyles.textInput}
            placeholder="Phone Number"
            value={values.phone}
            keyboardType="numeric"
            onChangeText={handleChange("phone")}
            onBlur={handleBlur("phone")}
            />
        </View>
        {touched.phone && errors.phone && (
                    <Text
                      style={{
                        fontSize: 10,
                        color: "red",
                        fontFamily: "Montserrat-Regular",
                        marginTop:-10,
                        marginBottom:5
                      }}
                    >
                      {errors.phone}
                    </Text>
                  )}
        {/* <View style={globalStyles.inputView}>
         <TextInput
            style={globalStyles.textInput}
            placeholder="Current Location"
            value={values.location}
            onChangeText={handleChange("location")}
            onBlur={handleBlur("location")}
            />
        </View> 
        {touched.location && errors.location && (
                    <Text
                      style={{
                        fontSize: 10,
                        color: "red",
                        fontFamily: "Montserrat-Regular",
                        marginTop:-10,
                      }}
                    >
                      {errors.location}
                    </Text>
                  )} */}
            <View style={{marginTop:50}}>

        <Button
          title="Confirm"
          btnWidth={"50%"}
          onpress={handleSubmit}
          />
          </View>
          </>
        )}
          </Formik>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  image: {
    flex: 2,
    height:"70%"
  },
  cardView:{
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      height: 100,
      gap: 20,
      borderRadius: 5,
      borderWidth:2,
      borderColor: themeColor.primary,
      marginBottom: 10,
  },
  textView: {
    flex: 3,
  },
});
