import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global";
import FoodCard from "../../../components/card/foodCard/FoodCard";

const Orders = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date='2023-04-07'
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date='2023-04-07'
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date='2023-04-07'
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date='2023-04-07'
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date='2023-04-07'
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date='2023-04-07'
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date='2023-04-07'
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date='2023-04-07'
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date='2023-04-07'
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date='2023-04-07'
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date='2023-04-07'
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date='2023-04-07'
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          currentStatus="in progress"
          date='2023-04-07'
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default Orders;
