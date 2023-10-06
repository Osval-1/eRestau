import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { globalStyles } from "../../styles/global";
import themeColor from "../../../themeColor";
import Button from "../../components/button/Button";
import { Entypo } from "@expo/vector-icons";

const ForgotPassword = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={globalStyles.container}>
        <View style={styles.imageView}>
          <Image
            source={require("../../../assets/images/forgotpass.png")}
            style={styles.image}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={globalStyles.form}>
            <View style={globalStyles.inputView}>
              <Entypo
                name="email"
                size={24}
                color={themeColor.primary}
                style={{ marginRight: 5 }}
              />
              <TextInput
                style={globalStyles.textInput}
                placeholder="Email"
                onChangeText={(value) => console.log(value)}
              />
            </View>
            <Button title={"Submit"} onpress={()=>console.log('submitted')}/>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageView: {
    width: "100%",
    marginTop: 30,
  },
  image: {
    width: "100%",
    height: 300,
  },
});

export default ForgotPassword;
