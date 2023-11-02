import React,{useState, useEffect, useRef} from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Button, PermissionsAndroid } from "react-native";
import Slider from "../../../components/slider/Slider";
import Card from "../../../components/card/card/Card";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../../project.config";
import { getMenu } from "../../../redux/reducers/restau/menuReducer";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import messaging from '@react-native-firebase/messaging';


const RestauDashboard = ({ navigation }) => {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  const menu = useSelector(state => state.menu)

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  };
  // useEffect(() => {

  //   if (requestUserPermission()) {
  //     const fcmToken = await firebase.messaging().getToken();
  //     console.log(token)
  //       }
  // }, []);
  // Notifications.setNotificationHandler({
  //   handleNotification: async () => ({
  //     shouldShowAlert: true,
  //     shouldPlaySound: true,
  //     shouldSetBadge: false,
  //   }),
  // });






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
