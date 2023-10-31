import React, { useCallback, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global";
import FoodCard from "../../../components/card/foodCard/FoodCard";
import { useFocusEffect } from "@react-navigation/native";
import { getOrders } from "../../../redux/reducers/restau/restauReducer";
import Loader from "../../../components/loader/Loader";

import { useDispatch, useSelector } from "react-redux";

const Orders = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.auth.user)


  useFocusEffect(
    useCallback(() => {
      getOrders();
    }, [])
  );

  const getOrders = async () => {
    try {
      setLoading(true);
      const response = await dispatch(getAllMenu(user.id)).unwrap();
      console.log(response);
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
    paddingHorizontal: 10,
  },
});
export default Orders;
