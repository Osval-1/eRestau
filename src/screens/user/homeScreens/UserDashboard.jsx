import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import Slider from "../../../components/slider/Slider";
import Card from "../../../components/card/card/Card";
import Tag from "../../../components/tag/Tag";
import { useDispatch, useSelector } from "react-redux";
import { getRecentlyViewed } from "../../../redux/reducers/user/userReducer";
import themeColor from "../../../../themeColor";
import { globalStyles } from "../../../styles/global";

const UserDashboard = ({ navigation }) => {
  //placeholder data for smallCard Component

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
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 10 }}
      >
        {/* categories header */}

        <ScrollView
          horizontal
          contentContainerStyle={styles.categoryContainer}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              console.log("home");
            }}
            delayPressIn={50}
            style={styles.categoryView}
          >
            <View style={styles.imageView}>
              <Image
                source={require("../../../../assets/images/food.jpg")}
                style={styles.image}
              />
            </View>
            <Text style={{ ...globalStyles.textHeader, textAlign: "center" }}>
              Snacks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              console.log("home");
            }}
            delayPressIn={50}
            style={styles.categoryView}
          >
            <View style={styles.imageView}>
              <Image
                source={require("../../../../assets/images/food.jpg")}
                style={styles.image}
              />
            </View>
            <Text style={{ ...globalStyles.textHeader, textAlign: "center" }}>
              Burgers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              console.log("home");
            }}
            delayPressIn={50}
            style={styles.categoryView}
          >
            <View style={styles.imageView}>
              <Image
                source={require("../../../../assets/images/food.jpg")}
                style={styles.image}
              />
            </View>
            <Text style={{ ...globalStyles.textHeader, textAlign: "center" }}>
              Desserts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              console.log("home");
            }}
            delayPressIn={50}
            style={styles.categoryView}
          >
            <View style={styles.imageView}>
              <Image
                source={require("../../../../assets/images/food.jpg")}
                style={styles.image}
              />
            </View>
            <Text style={{ ...globalStyles.textHeader, textAlign: "center" }}>
              pizza
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              console.log("home");
            }}
            delayPressIn={50}
            style={styles.categoryView}
          >
            <View style={styles.imageView}>
              <Image
                source={require("../../../../assets/images/restaurant.jpg")}
                style={styles.image}
              />
            </View>
            <Text style={{ ...globalStyles.textHeader, textAlign: "center" }}>
              Snacks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              console.log("home");
            }}
            delayPressIn={50}
            style={styles.categoryView}
          >
            <View style={styles.imageView}>
              <Image
                source={require("../../../../assets/images/food.jpg")}
                style={styles.image}
              />
            </View>
            <Text style={{ ...globalStyles.textHeader, textAlign: "center" }}>
              Snacks
            </Text>
          </TouchableOpacity>
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
        <View style={{ marginHorizontal: 10 }}>
          <Tag label="Fried plantains" />
          <Card
            label="Koki Beans"
            onpress={() =>
              navigation.navigate("HomeStack", { screen: "SingleFood" })
            }
            image="https://newalzironbucket.s3.amazonaws.com/1698169579868-Achu.jpeg"
          />
          <Tag label="Jellof rice" />
          <Card
            label="Kolanut"
            onpress={() =>
              navigation.navigate("HomeStack", { screen: "SingleFood" })
            }
            image="https://newalzironbucket.s3.amazonaws.com/1698169579868-Achu.jpeg"
          />
        </View>
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
    marginHorizontal: 10,
    // marginRight:100,
     gap:10,
     marginTop:20,
    },
  categoryView: {
    flexDirection: "column",
    gap: 10,
    width: "25%",
    height: 130,
    borderWidth: 1,
    borderColor: themeColor.grey_0,
    justifyContent: "center",
    alignItems: "center",
    // ,backgroundColor:"#F0F0F0"
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  imageView: {
    width: "65%",
    height: "50%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 999,
  },
});

export default UserDashboard;
