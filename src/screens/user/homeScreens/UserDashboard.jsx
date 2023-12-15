import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Slider from "../../../components/slider/Slider";
import Card from "../../../components/card/card/Card";
import Tag from "../../../components/tag/Tag";
import { useDispatch, useSelector } from "react-redux";
import { getRecentlyViewed } from "../../../redux/reducers/user/userReducer";

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
});

export default UserDashboard;
