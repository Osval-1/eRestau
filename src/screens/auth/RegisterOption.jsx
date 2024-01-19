import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { globalStyles } from "../../styles/global";
import Button from "../../components/button/Button";

const RegisterOption = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={globalStyles.container}>
        <View style={styles.imageView}>
          <Image
            source={require("../../../assets/images/my_app.png")}
            style={styles.image}
          />
        </View>
        <Text style={{...globalStyles.textHeader,marginBottom:10}}>
          Register as a Customer Or Restaurant
        </Text>
        <View style={{gap:10}}>
          <Button
            title={"Register as Restaurant"}
            btnWidth={"80%"}
            onpress={() => navigation.navigate("RestauRegistration")}
            
          />
          <Button
            title={"Register as Cutsomer"}
            btnWidth={"80%"}
            onpress={() => navigation.navigate("UserRegistration")}
            outlined={true}
          />
          <Button
            title={"Login"}
            btnWidth={"80%"}
            onpress={() => navigation.navigate("UserLogin")}
            outlined={true}
          />
        </View>
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
  text: {
    ...globalStyles.textBody,
    textAlign: "center",
    marginBottom:20
  },
});

export default RegisterOption;
