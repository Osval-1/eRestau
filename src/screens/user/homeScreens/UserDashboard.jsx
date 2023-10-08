import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import Slider from "../../../components/slider/Slider";
import Card from "../../../components/card/card/Card";

const UserDashboard = ({ navigation }) => {
  //placeholder data for smallCard Component
  const smallCardData1 = {
    tag: { name: "Popular Today!", path: "popular" },
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
    tag: { name: "Recently viewed", path: "recent" },
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Slider foodData={smallCardData1} />
        <Slider foodData={smallCardData2} />
        <View style={{ marginHorizontal: 10 }}>
          <Card onpress={()=>
          navigation.navigate("HomeStack", { screen:"SingleFood" })
            } />
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

export default UserDashboard;
