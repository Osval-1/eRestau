import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Slider from "../../../components/slider/Slider";
import Card from "../../../components/card/card/Card";
import { globalStyles } from "../../../styles/global";
import themeColor from "../../../../themeColor";

const RestauDashboard = ({ navigation }) => {
  //placeholder data for smallCard Component
  const smallCardData1 = {
    tag: { name: "Menu", path: "allMenus" },
    data: [
      {
        id: "0",
        foodName: "Jellof rice",
        price: "2000F",
        distance: "2.3 KM",
        path: "menu",
      },
      {
        id: "1",
        foodName: "Eru and Gari",
        price: "3000F",
        distance: "5.3 KM",
        path: "menu",
      },
      {
        id: "2",
        foodName: "Ndole",
        price: "4000F",
        distance: "2.6 KM",
        path: "menu",
      },
      {
        id: "3",
        foodName: "Okra Soup",
        price: "7000F",
        distance: "8.3 KM",
        path: "menu",
      },
      {
        id: "4",
        foodName: "Koki",
        price: "1000F",
        distance: "7.3 KM",
        path: "menu",
      },
    ],
  };
  const smallCardData2 = {
    tag: { name: "Orders", path: "allOrders" },
    data: [
      {
        id: "0",
        foodName: "Jellof rice",
        price: "2000F",
        distance: "2.3 KM",
        path: "orders",
      },
      {
        id: "1",
        foodName: "Eru and Gari",
        price: "3000F",
        distance: "5.3 KM",
        path: "orders",
      },
      {
        id: "2",
        foodName: "Ndole",
        price: "4000F",
        distance: "2.6 KM",
        path: "orders",
      },
      {
        id: "3",
        foodName: "Okra Soup",
        price: "7000F",
        distance: "8.3 KM",
        path: "orders",
      },
      {
        id: "4",
        foodName: "Koki",
        price: "1000F",
        distance: "7.3 KM",
        path: "orders",
      },
    ],
  };
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 10 }}
      >
        <Slider foodData={smallCardData1} label="Menu" />
        <Slider foodData={smallCardData2} label="Orders"/>
        <View style={{ marginHorizontal: 10 }}>
          <Card label='Friends n Food'  />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default RestauDashboard;
