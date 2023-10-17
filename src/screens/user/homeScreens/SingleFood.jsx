import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Card from "../../../components/card/card/Card";
// import CategoryTag from "../../../components/tag/CategoryTag";
import { Entypo, Feather, EvilIcons, FontAwesome } from "@expo/vector-icons";
import themeColor from "../../../../themeColor";
import { globalStyles } from "../../../styles/global";
import Button from "../../../components/button/Button";
import MenuTile from "../../../components/card/MenuCard/MenuCard";

export default function SingleFood() {
  const [pic, setPic] = useState(null);
  const getimage = async () => {
    try{
      console.log("getting image")
      const response = await fetch(
        "http://192.168.43.200:9000/api/product/652d3b914bedf1af6adaa1ae"
        );
        console.log("converting  image")
        console.log(response)
        const res = await response.json();
        setPic(res.image);
        console.log(res)
      }catch(error){
        console.log(error)
      }
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card onpress={() => console.log("asda")} label="Cabbage salad" src={"http://192.168.43.200:9000/uploads/06ce9846cb83e05f330eb1b9c45f53cc"} />
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
              onpress={getimage}
            />
          </View>
        </View>
        <Text
          style={{
            ...globalStyles.textLarge,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Menu
        </Text>
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
