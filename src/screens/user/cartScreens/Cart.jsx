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
import { useToast } from "react-native-paper-toast";
import { getTotal } from "../../../redux/reducers/user/cartReducer";

const Cart = ({ navigation }) => {
  // --------------------
  // function ratingCompleted(rating){
  //   console.log("Rating is: " + rating)
  // }
  // --------------------
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const cart = useSelector((state) => state.cart.cart);

  const toaster = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cart);
    totalPrice();
  }, [cart]);

  const totalPrice = () => {
    let totalprice = 0;
    let totaldeliveries = 0;

    // use a set so that the ids do not repeat
    let totalDeliveryIds = new Set();

    // calculate the price for the entire cart
    cart.forEach(
      (item) => (totalprice = totalprice + item.price * item.quantity)
    );

    //get the seperate ids involved in the process
    // cart.forEach((item) => totalDeliveryIds.add(item.createdBy));

    //calculate the delivery fees for the cart
    // totalDeliveryIds.forEach(
    //   (item) => (totaldeliveries = totaldeliveries + 500)
    // );
    setTotal(totalprice);
  };
  if (loading) return <Loader />;
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.amountView}>
          <View style={styles.textView}>
            <Text style={globalStyles.textHeader}>Total</Text>
            <Text style={globalStyles.textLarge}>{total}FCFA</Text>
          </View>
          <View style={styles.container}>
            <Button
              title="Order"
              btnWidth="100%"
              onpress={() => {
                if (!cart[0]) {
                  toaster.show({
                    message: "Empty Cart, Please place an order ",
                    type: "error",
                    position: "top",
                  });
                  return;
                }
                dispatch(getTotal(total));
                navigation.navigate("CartStack", { screen: "Payment Method" });
              }}
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
