import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import SmallCard from "../card/smallCard/SmallCard";
import { AntDesign } from "@expo/vector-icons";
import themeColor from "../../../themeColor";
import { globalStyles } from "../../styles/global";
import Tag from "../tag/Tag";
//all onpress events contain placeholder functions waiting for navigation to be implemented

export default function Slider({ foodData, onpress, label }) {
  const { tag, data } = foodData;
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 10 }}>
        <Tag label={label} />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatlistView}
        data={data}
        renderItem={({ item }) => {
          const { foodName, price, distance } = item;
          return (
            <SmallCard foodName={foodName} price={price} distance={distance} />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
