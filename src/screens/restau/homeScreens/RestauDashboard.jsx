import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Button,
} from "react-native";
import Slider from "../../../components/slider/Slider";
import Card from "../../../components/card/card/Card";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../../project.config";
import { getMenu} from "../../../redux/reducers/restau/menuReducer";
import { uploadToken } from "../../../redux/reducers/user/userReducer";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

import Constants from "expo-constants";
import messaging from "@react-native-firebase/messaging";
import { globalStyles } from "../../../styles/global";

const RestauDashboard = ({ navigation }) => {
  const dispatch = useDispatch()
  const menu = useSelector((state) => state.menu);
  const username = useSelector((state) =>state.auth.user.username )
  

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  };

  const sendToken = async (data) => {
    try {
      const response = await dispatch(uploadToken(data)).unwrap();
      console.log(response,"dfghjkl")
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (requestUserPermission()) {
      messaging()
        .getToken()
        .then((token) => sendToken({token,username}))
    }
    console.log(username)
    // Set up the notification handler for the app
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });

    // Handle user clicking on a notification and open the screen
    const handleNotificationClick = async (response) => {
      const screen = response?.notification?.request?.content?.data?.screen;
      if (screen !== null) {
        navigation.navigate(screen);
      }
    };

    // Listen for user clicking on a notification
    const notificationClickSubscription =
      Notifications.addNotificationResponseReceivedListener(
        handleNotificationClick
      );

    // Handle user opening the app from a notification (when the app is in the background)
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.data.screen,
        navigation
      );
      if (remoteMessage?.data?.screen) {
        navigation.navigate(`${remoteMessage.data.screen}`);
      }
    });

    // Check if the app was opened from a notification (when the app was completely quit)
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
          if (remoteMessage?.data?.screen) {
            navigation.navigate(`${remoteMessage.data.screen}`);
          }
        }
      });

    // Handle push notifications when the app is in the background
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
      const notification = {
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        data: remoteMessage.data, // optional data payload
      };

      // Schedule the notification with a null trigger to show immediately
      await Notifications.scheduleNotificationAsync({
        content: notification,
        trigger: null,
      });
    });

    // Handle push notifications when the app is in the foreground
    const handlePushNotification = async (remoteMessage) => {
      const notification = {
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        data: remoteMessage.data, // optional data payload
      };

      // Schedule the notification with a null trigger to show immediately
      await Notifications.scheduleNotificationAsync({
        content: notification,
        trigger: null,
      });
    };

    // Listen for push notifications when the app is in the foreground
    const unsubscribe = messaging().onMessage(handlePushNotification);

    // Clean up the event listeners
    return () => {
      unsubscribe();
      notificationClickSubscription.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 10 }}
      >
        <Slider
          itemData={menu}
          label="Menu"
          onpress={() => navigation.navigate("Menu")}
        />

      </ScrollView> */}
      <View style={styles.dashboardView}>
        <Text
          style={{ ...globalStyles.textBody, fontSize: 30, marginBottom: 20 }}
        >
          Hi Username
        </Text>
        <Text style={{...globalStyles.textHeader,fontSize:20,marginBottom:20}}>50 000 XAF</Text>
        <Text style={globalStyles.textBody}>
          What would you like to do today?
        </Text>
        <View style={styles.cardContainer}>
          <View style={{ ...styles.cardView, backgroundColor: "#837bcae6" }}>
            <MaterialIcons name="delivery-dining" size={48} color="black" />
            <Text style={{ ...globalStyles.textHeader, marginBottom: 10 }}>
              Completed deliveries
            </Text>
            <Text style={{ ...globalStyles.textLarge, fontSize: 30 }}>50</Text>
          </View>
          <View style={{ ...styles.cardView, backgroundColor: "#B1DE52" }}>
          <MaterialCommunityIcons
            name="account-group"
            size={48}
            color="black"
          />
            <Text style={{ ...globalStyles.textHeader, marginBottom: 10 }}>
              Completed deliveries
            </Text>
            <Text style={{ ...globalStyles.textLarge, fontSize: 30 }}>50</Text>
          </View>
          <View style={{ ...styles.cardView, backgroundColor: "#D9EADA" }}>
            <MaterialIcons
            name="account-balance-wallet"
            size={48}
            color="black"
          />
            <Text style={{ ...globalStyles.textHeader, marginBottom: 10 }}>
              Completed deliveries
            </Text>
            <Text style={{ ...globalStyles.textLarge, fontSize: 30 }}>50</Text>
          </View>
          <View style={{ ...styles.cardView, backgroundColor: "#F3C41F" }}>
          <MaterialCommunityIcons name="account-cash" size={48} color="black" />

            <Text style={{ ...globalStyles.textHeader, marginBottom: 10 }}>
              Completed deliveries
            </Text>
            <Text style={{ ...globalStyles.textLarge, fontSize: 30 }}>50</Text>
          </View>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  dashboardView: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  cardContainer: {
    marginTop: 20,
    flexDirection:"row",
    gap:10,
    flexWrap:"wrap",
  },
  cardView: {
    width: "48%",
    height: "50%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth:1,
  },
});

export default RestauDashboard;
