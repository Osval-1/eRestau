import React,{useState, useEffect, useRef} from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import Slider from "../../../components/slider/Slider";
import Card from "../../../components/card/card/Card";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../../project.config";
import { getMenu } from "../../../redux/reducers/restau/menuReducer";
import io from "socket.io-client";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';


const RestauDashboard = ({ navigation }) => {
  const menu = useSelector(state => state.menu)
  const socket = io.connect(config.ENDPOINT)
  
  useEffect(() => {
    socket.on("orderNotification", (order) => {
      console.log("Recieved order notification", order);
    })
    // console.log(config)
    return () => {
      socket.disconnect();
    }
  },[])

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 10 }}
      >
        <Slider itemData={menu} label="Menu" onpress={() =>
            navigation.navigate( "Menu"
            )
          } />
        {/* <Slider itemData={menu} label="Orders"/> */}
        <View style={{ marginHorizontal: 10 }}>
          <Card label='Friends n Food'  />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
  },
});

export default RestauDashboard;
