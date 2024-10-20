import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import React from "react";
import SmallCard from "../card/smallCard/SmallCard";
import Tag from "../tag/Tag";
import { useNavigation } from "@react-navigation/native";

//all onpress events contain placeholder functions waiting for navigation to be implemented

export default function Slider({ itemData, onpress, label }) {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={{marginVertical:10}}> 
      <View>
        <Tag label={label} />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatlistView}
        data={itemData}
        renderItem={({ item }) => {
          const { name, price, ownerName, image } = item;
          return (
            <SmallCard
              foodName={name}
              price={price}
              image={image}
              owner={ownerName}
              onpress={() => onpress(item)}
            />
          );
        }}
        keyExtractor={(item) => item._id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
