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
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "react-native-paper-toast";

export default function PaymentMethod({ navigation }) {
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [paymentPhone, setPaymentPhone] = useState("");
  const [customerLocation, setCustomerLocation] = useState("");

  const dispatch = useDispatch();
  const toaster = useToast();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text
          style={{
            ...globalStyles.textHeader,
            textAlign: "center",
            marginBottom: 20,
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
            
        <View style={globalStyles.inputView}>
          <TextInput
            style={globalStyles.textInput}
            placeholder="Phone Number"
            onChangeText={(value) => setPaymentPhone(value)}
          />
        </View>
        <View style={globalStyles.inputView}>
          <TextInput
            style={globalStyles.textInput}
            placeholder="Current Location"
            onChangeText={(value) => setCustomerLocation(value)}
          />
        </View>
        <Button
          title="Confirm"
          btnWidth={"50%"}
          onpress={() => {
            if (paymentPhone && customerLocation) {
              dispatch(
                getPaymentInfo({
                  paymentMethod,
                  paymentPhone,
                  customerLocation,
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
        />
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
