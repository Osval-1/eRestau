import React, { useCallback, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global";
import FoodCard from "../../../components/card/foodCard/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { getOrders } from "../../../redux/reducers/user/userReducer";
import themeColor from "../../../../themeColor";
import Modal from "react-native-modal";
import { MaterialIcons } from '@expo/vector-icons';
import Loader from "../../../components/loader/Loader";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { AntDesign, Entypo } from "@expo/vector-icons";


const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false)

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const orders = useSelector((state) => state.user.orders);

  useFocusEffect(
    useCallback(() => {
      getOrdersAsync();
      console.log(user,orders)
    }, [])
  );

  const getOrdersAsync = async () => {
    try {
      setLoading(true);
      const response = await dispatch(getOrders(user.id)).unwrap();
      console.log(response.res)
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {!orders[0] ? (
          <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={globalStyles.textHeader}>No Orders</Text>
              <Text style={globalStyles.textBody}>
                Orders can be viewed here
              </Text>
            </View>
          </View>
        ) : (
          <ScrollView>
            {orders.map((items) => {
              return (
                <FoodCard
                  key={items._id}
                  amount={items.quantity}
                  label={items.productName}
                  image={items.image}
                  location={items.ownerLocation}
                  price={items.price}
                  ownerName={items.ownerName}
                  // popup={
                  //   <Menu>
                  //     <MenuTrigger
                  //       customStyles={{
                  //         triggerWrapper: {
                  //           top: 5,
                  //           right: 10,
                  //         },
                  //       }}
                  //     >
                  //       <Entypo
                  //         name="dots-three-vertical"
                  //         size={24}
                  //         color="black"
                  //       />
                  //       {/* <MaterialIcons name="approval" size={24} color="black" /> */}
                  //     </MenuTrigger>
                  //     <MenuOptions>
                  //       <MenuOption
                  //         onSelect={() =>console.log(user)}
                  //         customStyles={{
                  //           optionWrapper: {
                  //             flexDirection: "row",
                  //             alignItems: "center",
                  //             justifyContent: "center",
                  //             padding: 10,
                  //             borderRadius: 5,
                  //             backgroundColor: themeColor.grey_0,
                  //           },
                  //         }}
                  //       >
                  //         <View>
                  //           <Text style={{ fontFamily: "Montserrat-SemiBold" }}>
                  //             Validate
                  //           </Text>
                  //         </View>
                  //       </MenuOption>
                  //     </MenuOptions>
                  //   </Menu>
                  // }
                />
              );
            })}
          </ScrollView>
        )}
        {/* <Modal isVisible={true}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
          </View>
      </Modal> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
});
export default Orders;
