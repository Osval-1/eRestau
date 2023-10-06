import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import DashboardHeader from "../../../components/header/dashboardHeader/DashboardHeader";
import Slider from "../../../components/slider/Slider";
import Card from "../../../components/card/card/Card";
import { globalStyles } from "../../../styles/global";
import themeColor from "../../../../themeColor";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Slider foodData={smallCardData1} />
        <Slider foodData={smallCardData2} />
        <Card navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestauDashboard;
