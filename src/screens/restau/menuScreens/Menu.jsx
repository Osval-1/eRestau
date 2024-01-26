import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import React, { useCallback, useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import themeColor from "../../../../themeColor";
import FoodCard from "../../../components/card/foodCard/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { globalStyles } from "../../../styles/global";
import {
  getAllMenu,
  deleteSingleMenu,
} from "../../../redux/reducers/restau/menuReducer";
import Loader from "../../../components/loader/Loader";
import Modal from "react-native-modal";
import { useToast } from "react-native-paper-toast";
import Button from "../../../components/button/Button";
import VerificationAlertModal from "../../../components/modals/verificationAlert/VerificationAlertModal";





export default function Menus({ navigation }) {

  const [modal, setModal] = useState(false)

  const [loading, setLoading] = useState(false);

  const menu = useSelector((state) => state.menu);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const toaster = useToast();

  // everytime user navigates to this screen,fetch the menu from server
  useFocusEffect(
    useCallback(() => {
      getMenu();
      if(!user.verifyUser){
        setModal(true)
      }
    }, [])
  );

  const getMenu = async () => {
    try {
      setLoading(true);
      const response = await dispatch(getAllMenu(user.id)).unwrap();
      console.log(response.res)
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const deleteSingleMenuAsync = async (data) => {
    try {
      const response = await dispatch(deleteSingleMenu(data)).unwrap();
      getMenu();
      toaster.show({
        message: "Menu deleted",
        type: "success",
        position: "top",
      });
    } catch (error) {
      console.log(error);
      toaster.show({
        message: "Failed to delete Menu",
        type: "error",
        position: "top",
      });
    }
  };
  const editMenu = async () => {
    try {
      const response = await dispatch(getAllMenu()).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {!menu[0] ? (
          <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={globalStyles.textHeader}>No menu found</Text>
              <Text style={globalStyles.textBody}>
                Create a menu to view here
              </Text>
              <Text style={{...globalStyles.textHeader,marginTop:100,marginBottom:20}}>
              Below is an example of a created menu
              </Text>
              <FoodCard
                  key="afads"
                  label="eru and garri"
                  // servings={items.quantity}
                  price="2000"
                  image="https://storage.googleapis.com/e-restou-alziron.appspot.com/1705500458264_garri.jpeg?GoogleAccessId=firebase-adminsdk-37aq4%40e-restou-alziron.iam.gserviceaccount.com&Expires=16730323200&Signature=EVEKtqzqTULCsS60mpCk8pvz1KuoqBIZ8DyTXtcs5G1IT1Q0kpzx6v7Tb3%2FPkUaa0%2BJB%2BalmqZYhLRaKN2z1shm1%2B8R0E9qvGKy4jGBNGaX9bm7quXfl50GadkxuS3fe6JTXAiPaqAGabTS7M2H2z5BGgBSo%2FFrIFJNAIBMpwGWsLqAki4BbSLQ51RIfWDngYlU%2B7UWxH6FTn0cERkTqX3N3egOmyfXIHQM8mhAqD4YqU7Sb6z3MVAopeIqUUMHK0B40q2WmKCYBDp%2FSOudtf0c3EVFBAsoJThxltq%2FcI7O4EAJ%2BOnspPW06cxj0S3UEdo3X4%2FDJEPPssZX2D9vLQg%3D%3D"
                  ownerName="kizzie's Snack"
                  />
                  <Text style={globalStyles.textBody}>
                *Menu should be reuploaded daily
              </Text>
            </View>
          </View>
        ) : (
          <ScrollView>
            {menu.map((items) => {
              return ( 
                <FoodCard
                  key={items._id}
                  label={items.name}
                  // servings={items.quantity}
                  price={items.price}
                  image={items.image}
                  ownerName={items.ownerName}
                  popup={
                    <Menu>
                      <MenuTrigger
                        customStyles={{
                          triggerWrapper: {
                            top: 5,
                            right: 10,
                          },
                        }}
                      >
                        <Entypo
                          name="dots-three-vertical"
                          size={24}
                          color="black"
                        />
                      </MenuTrigger>
                      <MenuOptions>
                        <MenuOption
                          onSelect={() => deleteSingleMenuAsync(items._id)}
                          customStyles={{
                            optionWrapper: {
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: 10,
                              borderRadius: 5,
                              backgroundColor: themeColor.grey_0,
                            },
                          }}
                        >
                          <View>
                            <Text style={{ fontFamily: "Montserrat-SemiBold" }}>
                              Delete
                            </Text>
                          </View>
                        </MenuOption>
                      </MenuOptions>
                    </Menu>
                  }
                />
              );
            })}
          </ScrollView>
        )}
       {modal && <VerificationAlertModal onpress={()=>setModal(false)}/>}
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.buttonView}
        onPress={() =>
          navigation.navigate("MenuStack", { screen: "Create Menu" })
        }
      >
        <AntDesign name="pluscircle" size={55} color={themeColor.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  buttonView: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 1000,
  },
});
