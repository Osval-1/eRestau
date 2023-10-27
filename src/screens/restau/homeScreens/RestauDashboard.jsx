import React from "react";
import { View, Text, StyleSheet, ScrollView,TouchableHighlight } from "react-native";
import Slider from "../../../components/slider/Slider";
import Card from "../../../components/card/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../../redux/reducers/restau/menuReducer";


const RestauDashboard = ({ navigation }) => {
  const menu = useSelector(state=>state.menu)
  //placeholder data for smallCard Component

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 10 }}
      >
        <Slider itemData={menu} label="Menu" />
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
