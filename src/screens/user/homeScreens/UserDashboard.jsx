import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import Slider from "../../../components/slider/Slider";
import Card from "../../../components/card/card/Card";
import Tag from "../../../components/tag/Tag";
import { useDispatch, useSelector } from "react-redux";
import { getRecentlyViewed } from "../../../redux/reducers/user/userReducer";
import themeColor from "../../../../themeColor";
import { globalStyles } from "../../../styles/global";
import { useNavigation } from "@react-navigation/native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import messaging from "@react-native-firebase/messaging";
import { searchCategory } from "../../../redux/reducers/user/userReducer";

// TODO
// re-implement search by category in a more eficeint and clean way

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

  useEffect(() => {
    getRecents();
  }, []);
  const getRecents = async () => {
    try {
      setLoading(true);
      const response = await dispatch(getRecentlyViewed()).unwrap();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (requestUserPermission()) {
      messaging()
        .getToken()
        .then((token) => console.log(token));
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

  const CategoryOption = ({ label, src, onpress }) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => onpress(label)}
        delayPressIn={50}
        style={styles.categoryView}
      >
        <View style={styles.imageView}>
          <Image source={src} style={styles.image} />
        </View>
        <Text style={{ ...globalStyles.textHeader, textAlign: "center" }}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  const categories = [
    {
      category: "snacks",
      src: require("../../../../assets/images/snacks.jpg"),
    },
    {
      category: "burger",
      src: require("../../../../assets/images/burger.jpg"),
    },
    { category: "salad", src: require("../../../../assets/images/salad.jpg") },
    { category: "local", src: require("../../../../assets/images/food.jpg") },
    { category: "pizza", src: require("../../../../assets/images/food.jpg") },
  ];
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 10 }}
      >
        <Text style={{ ...globalStyles.textLarge, marginHorizontal: 10 }}>
          Categories
        </Text>

        {/* categories header */}

        <ScrollView
          horizontal
          contentContainerStyle={styles.categoryContainer}
          showsHorizontalScrollIndicator={false}
        >
          {/* <CategoryOption label={"burger"} src={require("../../../../assets/images/burger.jpg")}/> */}
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

        {/* sliders start here */}

        <Slider
          itemData={recentlyViewed}
          label="Recently Today!"
          // this function is passed to the child component then run there
          onpress={(item) =>
            navigation.navigate("HomeStack", {
              screen: "SingleFood",
              params: { item },
            })
          }
        />
        {/* <Slider itemData={smallCardData2} label="Recomendations" /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  categoryContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    //  gap:10,
    marginTop: 20,
  },
  categoryView: {
    flexDirection: "column",
    gap: 10,
    width: 110,
    height: 130,
    borderWidth: 1,
    borderColor: themeColor.grey_0,
    justifyContent: "center",
    alignItems: "center",
    // ,backgroundColor:"#F0F0F0"
    borderRadius: 15,
    marginRight: 15,
    paddingHorizontal: 10,
  },
  imageView: {
    width: "70%",
    height: "50%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 999,
  },
});

export default UserDashboard;
