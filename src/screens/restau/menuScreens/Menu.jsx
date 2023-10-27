import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import React, { useCallback,useState } from "react";
import { AntDesign,Entypo } from "@expo/vector-icons";
import themeColor from "../../../../themeColor";
import FoodCard from "../../../components/card/foodCard/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { globalStyles } from "../../../styles/global";
import { getAllMenu } from "../../../redux/reducers/restau/menuReducer";
import Loader from "../../../components/loader/Loader";

export default function Menus({ navigation }) {
  const [loading, setLoading] = useState(false)
  const menu = useSelector((state) => state.menu);
  const user = useSelector((state)=>state.auth.user)
  const dispatch = useDispatch();

  // everytime user navigates to this screen,fetch the menu from server
  useFocusEffect(
    useCallback(() => {
      getMenu();
    }, [])
  );

  const getMenu = async () => {
    try {
      setLoading(true)
      const response = await dispatch(getAllMenu(user.id)).unwrap();
      console.log(response)
    } catch (error) {
      console.log(error);
    }
    setLoading(false)

  };
  const deleteMenu=async()=>{
    try{
      const response = await dispatch(getAllMenu()).unwrap();
    }catch(error){
      console.log(error);
    }
  }
  const editMenu=async()=>{
    try{
      const response = await dispatch(getAllMenu()).unwrap();
    }catch(error){
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* {loading && <Loader/>} */}
        {!menu[0] ? (
          <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={globalStyles.textHeader}>No menu found</Text>
              <Text style={globalStyles.textBody}>
                Create a menu to view here
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
                              servings={items.quantity}
                              price={items.price}
                              image={items.image}
                              popup={
                                <Menu>
                  <MenuTrigger 
                  customStyles={{
                              triggerWrapper: {
                                top: 5,
                                right: 10,
                              },
                            }}>
                              
                    <Entypo
                      name="dots-three-vertical"
                      size={24}
                      color="black"
                      />
                    </MenuTrigger>
                    <MenuOptions>
                      <MenuOption
                        onSelect={() => alert(`Save`)}
                        customStyles={{
                          optionWrapper: {
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 10,
                            borderRadius: 5,
                            backgroundColor: themeColor.grey_0,
                          },
                        }}
                      >
                        <Text style={{ fontFamily: "Montserrat-SemiBold" }}>
                          Edit
                        </Text>
                      </MenuOption>
                      <MenuOption
                        onSelect={() => alert(`Save`)}
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
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.buttonView}
        onPress={() =>
          navigation.navigate("MenuStack", { screen: "Create Menu" })
        }
      >
        <AntDesign name="pluscircle" size={60} color={themeColor.primary} />
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
