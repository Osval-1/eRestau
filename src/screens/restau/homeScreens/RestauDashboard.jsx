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
import { getMenu } from "../../../redux/reducers/restau/menuReducer";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import messaging from "@react-native-firebase/messaging";

const RestauDashboard = ({ navigation }) => {
  const menu = useSelector((state) => state.menu);
  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log("Authorization status:", authStatus);
  //   }
  // };

// useEffect(() => {
// if (requestUserPermission()) {
//       messaging()
//         .getToken()
//         .then(
//           token => console.log(token)
//         );
//     }
//   // Set up the notification handler for the app
//   Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//       shouldShowAlert: true,
//       shouldPlaySound: true,
//       shouldSetBadge: false,
//     }),
//   });

//   // Handle user clicking on a notification and open the screen
//   const handleNotificationClick = async (response) => {
//     const screen = response?.notification?.request?.content?.data?.screen;
//     if (screen !== null) {
//       navigation.navigate(screen);
//     }
//   };

//   // Listen for user clicking on a notification
//   const notificationClickSubscription =
//     Notifications.addNotificationResponseReceivedListener(
//       handleNotificationClick
//     );

//   // Handle user opening the app from a notification (when the app is in the background)
//   messaging().onNotificationOpenedApp((remoteMessage) => {
//     console.log(
//       "Notification caused app to open from background state:",
//       remoteMessage.data.screen,
//       navigation
//     );
//     if (remoteMessage?.data?.screen) {
//       navigation.navigate(`${remoteMessage.data.screen}`);
//     }
//   });

//   // Check if the app was opened from a notification (when the app was completely quit)
//   messaging()
//     .getInitialNotification()
//     .then((remoteMessage) => {
//       if (remoteMessage) {
//         console.log(
//           "Notification caused app to open from quit state:",
//           remoteMessage.notification
//         );
//         if (remoteMessage?.data?.screen) {
//           navigation.navigate(`${remoteMessage.data.screen}`);
//         }
//       }
//     });

//   // Handle push notifications when the app is in the background
//   messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//     console.log("Message handled in the background!", remoteMessage);
//     const notification = {
//       title: remoteMessage.notification.title,
//       body: remoteMessage.notification.body,
//       data: remoteMessage.data, // optional data payload
//     };

//     // Schedule the notification with a null trigger to show immediately
//     await Notifications.scheduleNotificationAsync({
//       content: notification,
//       trigger: null,
//     });
//   });

//   // Handle push notifications when the app is in the foreground
//   const handlePushNotification = async (remoteMessage) => {
//     const notification = {
//       title: remoteMessage.notification.title,
//       body: remoteMessage.notification.body,
//       data: remoteMessage.data, // optional data payload
//     };

//     // Schedule the notification with a null trigger to show immediately
//     await Notifications.scheduleNotificationAsync({
//       content: notification,
//       trigger: null,
//     });
//   };

//   // Listen for push notifications when the app is in the foreground
//   const unsubscribe = messaging().onMessage(handlePushNotification);

//   // Clean up the event listeners
//   return () => {
//     unsubscribe();
//     notificationClickSubscription.remove();
//   }
// }, [])
return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 10 }}
      >
        <Slider
          itemData={menu}
          label="Menu"
          onpress={() => navigation.navigate("Menu")}
        />
        {/* <Slider itemData={menu} label="Orders"/> */}
        <View style={{ marginHorizontal: 10 }}>
          <Card label="Friends n Food" />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default RestauDashboard;
