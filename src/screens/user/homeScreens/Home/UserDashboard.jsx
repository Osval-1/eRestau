import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import Slider from "../../../../components/slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { getRecentlyViewed } from "../../../../redux/reducers/user/userReducer";
import themeColor from "../../../../../themeColor";
import { globalStyles } from "../../../../styles/global";
import * as Device from "expo-device";
import { Ionicons, FontAwesome6, EvilIcons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import messaging from "@react-native-firebase/messaging";
import { searchCategory } from "../../../../redux/reducers/user/userReducer";
import { uploadToken } from "../../../../redux/reducers/user/userReducer";
import SmallCard from "../../../../components/card/smallCard/SmallCard";
import SplashScreenManager from "../../../splash-screen-manager/SplashScreenManager";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/assets/static";
import { styles } from "./styles";
import { categories } from "@/utils/categories";

// TODO
// re-implement search by category in a more efficeint and clean way

const UserDashboard = ({ navigation }) => {
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  };

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const recentlyViewed = useSelector((state) => state.user.recentlyViewed);
  const frequentlyBought = useSelector((state) => state.user.frequentlyBought);
  const username = useSelector((state) => state.auth.user.username);

  const sendToken = async (data) => {
    try {
      // const  notificationKey = await SecureStore.getItemAsync("notificationKey")
      // if(notificationKey){
      //   return
      // }
      // await SecureStore.setItemAsync("notificationKey",data.token)
      const response = await dispatch(uploadToken(data)).unwrap();
      console.log(data.username, data.token, response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecents();
  }, []);
  const getRecents = async () => {
    try {
      setLoading(true);
      const response = await dispatch(getRecentlyViewed()).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (requestUserPermission()) {
      messaging()
        .getToken()
        .then((token) => sendToken({ token, username }));
    }
    // Set up the notification handler for the app
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
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


  // return <SplashScreenManager/>
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerIconContainer}>
            <Pressable style={styles.headerIcon}>
              <Ionicons
                name="location-outline"
                size={24}
                color={themeColor.primary}
                style={{
                  opacity: 1,
                }}
              />
            </Pressable>
            <View>
              <View style={styles.currentLocationTextContainer}>
                <Text style={globalStyles.textGrey}>Current location</Text>
                <FontAwesome6
                  name="caret-down"
                  size={15}
                  color={themeColor.grey_1}
                />
              </View>
              <Text style={globalStyles.textBody}>
                Jl. Soekarno Hatta 15A Malang
              </Text>
            </View>
          </View>
          <Pressable style={styles.notificationContainer}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.searchContainer}>
          <View style={{ flexDirection: "row", gap: 2 }}>
            <EvilIcons name="search" size={28} color={themeColor.grey_2} />
            <TextInput
              placeholder="Search foods, restaurants etc"
              style={{ ...globalStyles.textBody, width: "80%" }}
            />
          </View>
          <Ionicons name="filter-outline" size={24} color={themeColor.grey_2} />
        </View>
        <View style={styles.bannerContainer}>
          <Image
            source={images.banner}
            style={styles.bannerImageStyle}
          />
          <View
            style={styles.bannerTextContainer}
          >
            <Text
              style={styles.bannertextStyle}
            >
              Claim your discount 30% daily now!
            </Text>
            <Pressable
              style={styles.bannerButtonContainer}
            >
              <Text
                style={styles.bannerButtonText}
              >
                Order
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={globalStyles.textLarge}>Top Categories</Text>
          <ScrollView
            horizontal
            contentContainerStyle={styles.categoryContainer}
            showsHorizontalScrollIndicator={false}
            contentInsetAdjustmentBehavior="automatic"
          >
            {categories.map((item) => {
              const { category, src } = item;
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    dispatch(searchCategory(category));
                    navigation.navigate("HomeStack", {
                      screen: "SearchFood",
                      params: { category },
                    });
                  }}
                  delayPressIn={50}
                  style={styles.categoryView}
                  key={category}
                >
                  <View style={styles.imageView}>
                    <Image source={src} style={styles.image} />
                  </View>
                  <Text
                    style={{ ...globalStyles.textHeader, textAlign: "center" }}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {loading ? (
          <>
            <View style={{ marginTop: 40 }}>
              <ActivityIndicator size="large" color={themeColor.primary} />
            </View>
          </>
        ) : (
          <>
            <Slider
              itemData={recentlyViewed}
              label="Recently Today!"
              onpress={(item) =>
                navigation.navigate("HomeStack", {
                  screen: "SingleFood",
                  params: { item },
                })
              }
            />
            <Text
              style={{
                ...globalStyles.textLarge,
                marginBottom: 10,
                marginLeft: 10,
              }}
            >
              Popular Today!
            </Text>
            <View
              style={{ flexDirection: "row", flexWrap: "wrap", paddingLeft: 5 }}
            >
              {frequentlyBought.map((item) => {
                if (item === null) {
                  return;
                }
                return (
                  <SmallCard
                    key={item.name}
                    price={item.price}
                    foodName={item.name}
                    image={item.image}
                    owner={item.ownerName}
                    onpress={() =>
                      navigation.navigate("HomeStack", {
                        screen: "SingleFood",
                        params: { item },
                      })
                    }
                  />
                );
              })}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default UserDashboard;
