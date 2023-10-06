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

//all onpress events contain placeholder functions waiting for navigation to be implemented

export default function Slider({ foodData, navigation }) {
  const { tag, data } = foodData;
  return (
    <ScrollView>
      <Pressable
        style={styles.cardHeader}
        onPress={() => console.log(tag.path)}
      >
        <View style={styles.tag}>
          <Text style={{ color: "#fff",...globalStyles.textHeader }}>{tag.name}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Text style={globalStyles.textHeader}> View all</Text>
          <View>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </View>
      </Pressable>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatlistView}
        data={data}
        renderItem={({ item }) => {
          const { foodName, price, distance } = item;
          return (
            <SmallCard
              foodName={foodName}
              price={price}
              distance={distance}
              navigation={navigation}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flatlistView: {
    marginHorizontal:10,
  },
  tag: {
    backgroundColor: themeColor.primary,
    borderRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
});
