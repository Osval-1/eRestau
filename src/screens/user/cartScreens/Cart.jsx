import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global";
import FoodCard from "../../../components/card/foodCard/FoodCard";
import Button from "../../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { Entypo } from "@expo/vector-icons";
import themeColor from "../../../../themeColor";
import { deleteFromCart } from "../../../redux/reducers/user/cartReducer";
import { setCart } from "../../../redux/reducers/user/cartReducer";
import Loader from "../../../components/loader/Loader";

const Cart = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(cart);
    totalPrice();
  }, [cart]);
  const totalPrice = () => {
    let totalprice = 0;
    cart.forEach(
      (item) => (totalprice = totalprice + item.price * item.quantity)
    );
    setTotal(totalprice);
  };
  const placeOrder = async () => {
    if (!cart[0]) {
      return;
    }
    setLoading(true);
    try {
      setLoading(true);
      const response = await dispatch(setCart(cart)).unwrap();
      console.log(response);
      navigation.navigate("CartStack", { screen: "Payment Method" });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  if (loading) return <Loader />;
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ marginTop: 20 }}>
        <View style={styles.amountView}>
          <View style={styles.textView}>
            <Text style={globalStyles.textHeader}>Total</Text>
            <Text style={globalStyles.textLarge}>{total}FCFA</Text>
          </View>
          <View style={styles.container}>
            <Button
              title={<Text style={globalStyles.textLarge}>Order</Text>}
              btnWidth="100%"
              onpress={
                () => placeOrder()
                // navigation.navigate("CartStack", { screen: "Payment Method" })
              }
            />
          </View>
        </View>
        {!cart[0] ? (
          <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={globalStyles.textHeader}>No cart found</Text>
              <Text style={globalStyles.textBody}>
                Order meals to view here
              </Text>
            </View>
          </View>
        ) : (
          cart.map((item) => {
            return (
              <FoodCard
                key={item.id}
                amount={item.quantity}
                label={item.productName}
                price={item.price}
                image={item.image}
                location={item.ownerLocation}
                userName={item.ownerName}
                // expectedTime={item.expectedTime}
                // currentStatus={item.currentStatus}
                // date={item.date}
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
                        onSelect={() => dispatch(deleteFromCart(item.id))}
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
          })
        )}
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
  amountView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  textView: {
    flex: 1,
  },
  buttonView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Cart;
