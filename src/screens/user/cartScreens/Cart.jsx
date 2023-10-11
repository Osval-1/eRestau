import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global";
import FoodCard from "../../../components/card/foodCard/FoodCard";
import Button from "../../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ navigation }) => {
  const Cart = useSelector((state) => state.cart);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ marginTop: 20 }}>
        <View style={styles.amountView}>
          <View style={styles.textView}>
            <Text style={globalStyles.textHeader}>Total</Text>
            <Text style={globalStyles.textLarge}>5000 FCFA</Text>
          </View>
          <View style={styles.container}>
            <Button
              title={<Text style={globalStyles.textLarge}>Order</Text>}
              btnWidth="100%"
              onpress={() =>
                navigation.navigate("CartStack", { screen: "Payment Method" })
              }
            />
          </View>
        </View>
        {Cart.map((item) => {
          return (
            <FoodCard
              key={item.id}
              amount={item.amount}
              label={item.label}
              expectedTime={item.expectedTime}
              currentStatus={item.currentStatus}
              date={item.date}
            />
          );
        })}
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
