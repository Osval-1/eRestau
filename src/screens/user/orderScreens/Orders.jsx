import React, { useCallback, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global";
import FoodCard from "../../../components/card/foodCard/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { getOrders } from "../../../redux/reducers/user/userReducer";
import Loader from "../../../components/loader/Loader";

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const orders = useSelector((state) => state.user.orders);

  useFocusEffect(
    useCallback(() => {
      getOrdersAsync();
    }, [])
  );

  const getOrdersAsync = async () => {
    try {
      setLoading(true);
      const response = await dispatch(getOrders(user.id)).unwrap();
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
        {!orders[0] ? (
          <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={globalStyles.textHeader}>No Orders</Text>
              <Text style={globalStyles.textBody}>
                Orders can be viewed here
              </Text>
            </View>
          </View>
        ) : (
          <ScrollView>
            {orders.map((items) => {
              return (
                <FoodCard
                  key={items._id}
                  amount={items.quantity}
                  label={items.productName}
                  image={items.image}
                  location={items.ownerLocation}
                  price={items.price}
                  // expectedTime="30 mins ago"
                  userName={items.ownerName}
                />
              );
            })}
          </ScrollView>
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
});
export default Orders;
