import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Card from "../../../components/card/card/Card";
import CategoryTag from "../../../components/tag/CategoryTag";
import { Entypo, Feather, EvilIcons, FontAwesome } from "@expo/vector-icons";
import themeColor from "../../../../themeColor";
import { globalStyles } from "../../../styles/global";
import Button from "../../../components/button/Button";
import MenuTile from "../../../components/card/MenuCard/MenuCard";

export default function SingleFood() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card onpress={() => console.log("asda")} label="Cabbage salad" />
        <View style={styles.orderView}>
          <View style={styles.amountView}>
            <TouchableOpacity>
              <Entypo name="plus" size={24} color={themeColor.primary} />
            </TouchableOpacity>
            <Text style={globalStyles.textLarge}>2</Text>
            <TouchableOpacity>
              <Entypo name="minus" size={24} color={themeColor.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonView}>
            <Button
              title={<Text style={globalStyles.textLarge}>Add to Cart</Text>}
              btnWidth="100%"
            />
          </View>
        </View>
          <Text style={
            {...globalStyles.textLarge,textAlign:"center",marginBottom:20}}>Menu</Text>
        <MenuTile label="Roasted Fish" price="5000FCFA" />
        <MenuTile label="Roasted Fish" price="5000FCFA" />
        <MenuTile label="Roasted Fish" price="5000FCFA" />
        <MenuTile label="Roasted Fish" price="5000FCFA" />
        <MenuTile label="Roasted Fish" price="5000FCFA" />
        <MenuTile label="Roasted Fish" price="5000FCFA" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  tagView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 4,
    marginBottom: 20,
  },
  orderView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    gap: 80,
  },
  amountView: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 5,
    borderColor: "#EFEDED",
    borderWidth: 1,
  },
  buttonView: {
    flex: 3,
  },

});
