import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global";
import FoodCard from "../../../components/card/foodCard/FoodCard";

const Orders = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{marginTop:20}} showsVerticalScrollIndicator={false}>
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          userName="User1"
          location={"Tarred Malingo"}
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          userName="User1"
          location={"Tarred Malingo"}
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          userName="User1"
          location={"Tarred Malingo"}
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          userName="User1"
          location={"Tarred Malingo"}
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          userName="User1"
          location={"Tarred Malingo"}
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          userName="User1"
          location={"Tarred Malingo"}
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          userName="User1"
          location={"Tarred Malingo"}
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          userName="User1"
          location={"Tarred Malingo"}
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          userName="User1"
          location={"Tarred Malingo"}
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          userName="User1"
          location={"Tarred Malingo"}
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          userName="User1"
          location={"Tarred Malingo"}
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          userName="User1"
          location={"Tarred Malingo"}
        />
        <FoodCard
          amount="3x"
          label="Roasted Tilapia"
          expectedTime="30 mins ago"
          userName="User1"
          location={"Tarred Malingo"}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal:10
  },
});
export default Orders;
