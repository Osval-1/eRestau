import { StyleSheet, Text, View, Pressable, UseEffect } from "react-native";
import React, { useState, useEffect } from "react";
import { globalStyles } from "../../styles/global";
import themeColor from "../../../themeColor";
import Button from "../../components/button/Button";
import { saveLoginInfo ,updateDeliveryInfo} from "../../redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "react-native-paper-toast";
import { signup } from "../../redux/reducers/authReducer";
import Loader from "../../components/loader/Loader";

const DeliverySystem = ({ navigation }) => {
  const [disabled, setDisabled] = useState(true);
  const [pressed, setPressed] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const toaster = useToast();
  const loginInfo = useSelector((state) => state.auth.loginInfo);

  useEffect(() => {
    console.log(loginInfo);
    const timeout = setTimeout(() => {
      setDisabled(false);
    }, 10000);
    return () => clearTimeout(timeout);
  });
  const handleSignup = async (data) => {
    dispatch(updateDeliveryInfo(pressed))
    setLoading(true);

    try {
      const res = await dispatch(signup(data)).unwrap();
      toaster.show({ message: "Signup successful", type: "success", position: "top" });
      navigation.navigate("UserLogin");
    } catch (error) {
      console.log(error);

      toaster.show({ message: error, type: "error", position: "top" });
      if (error.message) {
        toaster.show({
          message: "No Internet,Please check your connection!",
          type: "error",
          position: "top",
        });
      }
      setLoading(false);
      return;
    }
    setLoading(false);
  };
  if(loading){
    return <Loader/>
  }

  return (
    <View style={globalStyles.container}>
      <Text
        style={{
          ...globalStyles.textLarge,
          color: themeColor.primary,
          fontSize: 30,
          marginBottom: 40,
        }}
      >
        Delivery System?
      </Text>
      <Text style={{ ...globalStyles.textHeader, marginBottom: 10 ,textAlign:"center",lineHeight:20}}>
        Do you have a dedicated third party taking care of your deliveries?.
      </Text>
      <Text style={{ ...globalStyles.textHeader ,textAlign:"center",lineHeight:20}}>
        If not, donot worry we will provide a delivery system for your use
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={{
            backgroundColor: pressed ? themeColor.primary : themeColor.grey_1,
            ...styles.button,
          }}
          onPress={() => setPressed(true)}
        >
          <Text style={styles.text}>Yes</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: pressed ? themeColor.grey_1 : themeColor.primary,
            ...styles.button,
          }}
          onPress={() => setPressed(false)}
        >
          <Text style={styles.text}>No</Text>
        </Pressable>
      </View>
      <Button title="Signup" onpress={()=>handleSignup(loginInfo)} btnWidth="80%" disabled={disabled}/>
    </View>
  );
};

export default DeliverySystem;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 100,
  },
  buttonContainer: {
    marginBottom: 60,
    marginTop: 20,
    //    flex:1,
    flexDirection: "row",
    gap: 20,
  },
  text: {
    ...globalStyles.textHeader,
    color: "#fff",
  },
});
