import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { globalStyles } from "../../../styles/global";
import { useDispatch, useSelector } from "react-redux";
import FoodCard from "../../../components/card/foodCard/FoodCard";
import { clearSearch } from "../../../redux/reducers/user/userReducer";
import Loader from "../../../components/loader/Loader";

export default function SearchFood() {
  // the search header component in userhomeStack handles the searching and this one handles displaying the data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearSearch());
    console.log(searchResults)
  }, []);

  const searchResults = useSelector((state) => state.user.search);
  const loading = useSelector((state) => state.user.loading);

  if (loading) {
    return <Loader />;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!searchResults[0] ? (
        <View style={{ marginTop: 10 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={globalStyles.textHeader}>No searchResults found</Text>
            <Text style={globalStyles.textBody}>Orders can be viewed here</Text>
          </View>
        </View>
      ) : (
        <ScrollView>
          {searchResults.map((items) => {
            return (
              <FoodCard
                key={items._id}
                label={items.name}
                image={items.image}
                location={items.ownerLocation}
                price={items.price}
                // expectedTime="30 mins ago"
                userName={items.ownerName}
              />
            );
          })}
        </ScrollView>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
});
