import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRestauDashboard } from "../../../redux/reducers/restau/restauReducer";
import { uploadToken } from "../../../redux/reducers/user/userReducer";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import messaging from "@react-native-firebase/messaging";
import { globalStyles } from "../../../styles/global";
import * as SecureStore from "expo-secure-store";
import Button from "../../../components/button/Button";


const RestauDashboard = ({ navigation }) => {
 const [income, setIncome] = useState(0)
 const [totalDishes, setTotalDishes] = useState(0)
 const [customers, setCustomers] = useState(0)

  const dispatch = useDispatch()
  //reimplement so that the redux store is accessed only once with user and use user.username to send token
  const username = useSelector((state) =>state.auth.user.username )
  const user = useSelector((state)=>state.auth.user)
  const completedOrders = useSelector((state)=>state.restau.completedOrders)
  

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
      // const  notificationKey = await SecureStore.getItemAsync("notificationKey")
      // if(notificationKey){
        //   return
        // }
        // await SecureStore.setItemAsync("notificationKey",data.token)
        const response = await dispatch(uploadToken(data)).unwrap();
        console.log(data.username,data.token,response)
    } catch (error) {
      console.log(error);
    }
  };
  const getRestauDashboardAsync = async () => { 
    try {
        const response = await dispatch(getRestauDashboard(user.id)).unwrap();
        console.log(username)
    } catch (error) {
      console.log(error);
    }
  };
    
  const computeDashboardInfo = ()=>{
    const income = completedOrders.reduce((total,order)=>order.quantity*order.price+total,0)
    const totalDishes = completedOrders.reduce((total,order)=>order.quantity+total,0)
    const customers  = new Set()
    const getCustomers =  completedOrders.forEach((order)=>{
      customers.add(order.orderedBy)
    })
    // give the size of the set
    setCustomers(customers.size)
    setIncome(income)
    setTotalDishes(totalDishes)
  }

  useEffect(()=>{
    computeDashboardInfo()
    console.log(user)
  },[completedOrders])

  useEffect(() => {
    getRestauDashboardAsync()

    if (requestUserPermission()) {
      messaging()
        .getToken()
        .then((token) => sendToken({token,username}))
    }
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
      <View style={styles.dashboardView}>
        <Text
          style={{ ...globalStyles.textHeader, fontSize: 30, marginBottom: 20 ,textTransform:'capitalize',backgroundColor:themeColor.primary,color:"#fff",borderRadius:5,width:160,textAlign:"center"}}
        >
          Hi {username}
        </Text>
        {/* <Text style={{...globalStyles.textHeader,fontSize:20,marginBottom:20}}>50 000 XAF</Text> */}
        <Text style={globalStyles.textBody}>
          What would you like to do today?
        </Text>
        <View style={styles.cardContainer}>
          <View style={{ ...styles.cardView, backgroundColor: "#bab0fae6" }}>
            <MaterialIcons name="delivery-dining" size={48} color="black" />
            <Text style={{ ...globalStyles.textHeader, marginBottom: 10 }}>
              Completed deliveries
            </Text>
            <Text style={{ ...globalStyles.textLarge, fontSize: 30 }}>{completedOrders.length}</Text>
          </View>
          <View style={{ ...styles.cardView, backgroundColor: "#d5f889" }}>
         
          <MaterialIcons
            name="account-balance-wallet"
            size={48}
            color="black"
          />
            <Text style={{ ...globalStyles.textHeader, marginBottom: 10 }}>
              Income generated
            </Text>
            <Text style={{ ...globalStyles.textLarge, fontSize: 25 }}>{income} XAF</Text>
          </View>
          <View style={{ ...styles.cardView, backgroundColor: "#D9EADA" }}>
          <MaterialCommunityIcons
            name="account-group"
            size={48}
            color="black"
          />
            <Text style={{ ...globalStyles.textHeader, marginBottom: 10 }}>
              Customers
            </Text>
            <Text style={{ ...globalStyles.textLarge, fontSize: 30 }}>{customers}</Text>
          </View>
          <View style={{ ...styles.cardView, backgroundColor: "#ffe483" }}>
          <MaterialCommunityIcons name="account-cash" size={48} color="black" />

            <Text style={{ ...globalStyles.textHeader, marginBottom: 10 }}>
              Dishes Sold 
            </Text>
            <Text style={{ ...globalStyles.textLarge, fontSize: 30 }}>{totalDishes}</Text>
          </View>
        </View>
        
      </View>
      <View style={{alignItems:"center"}}>
       <Button title="Add Menu" maxWidth="50%" onpress={() =>
          navigation.navigate("Menu")
        }/>
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
    marginTop: 40,
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
