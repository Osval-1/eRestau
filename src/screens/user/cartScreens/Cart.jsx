import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global";
import FoodCard from "../../../components/card/foodCard/FoodCard";
import Button from "../../../components/button/Button";

const Cart = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ marginTop: 10 }}>
        <View style={styles.amountView}>
          <View style={styles.textView}>
            <Text style={globalStyles.textHeader}>Total</Text>
            <Text style={globalStyles.textLarge}>5000 FCFA</Text>
          </View>
          <View style={styles.container}>
            <Button
              title={<Text style={globalStyles.textLarge}>Order</Text>}
              btnWidth="100%"
            />
          </View>
        </View>
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date="2023-04-07"
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date="2023-04-07"
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date="2023-04-07"
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date="2023-04-07"
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date="2023-04-07"
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date="2023-04-07"
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date="2023-04-07"
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date="2023-04-07"
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date="2023-04-07"
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date="2023-04-07"
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date="2023-04-07"
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date="2023-04-07"
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date="2023-04-07"
        />
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
    marginBottom: 10,
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
