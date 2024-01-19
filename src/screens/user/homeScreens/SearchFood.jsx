import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { globalStyles } from "../../../styles/global";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch } from "../../../redux/reducers/user/userReducer";
import MenuCard from "../../../components/card/MenuCard/MenuCard";
import Loader from "../../../components/loader/Loader";

export default function SearchFood({navigation,route}) {

  // TODO 
// re-implement search by category in a more eficeint and clean way


  // the search header component in userhomeStack handles the searching and this one  displays the data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearSearch());
    console.log(searchResults);
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
            <Text style={globalStyles.textHeader}>No search results found</Text>
            {/* <Text style={globalStyles.textBody}>Please try search something else</Text> */}
          </View>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} >
          {searchResults.map((item) => {
            return (
              <MenuCard
                key={item._id}
                label={item.name}
                image={item.image}
                location={item.ownerLocation}
                price={item.price}
                ownerName={item.ownerName}
                onpress={() =>
                  navigation.navigate("HomeStack", {
                    screen: "SingleFood",
                    params: { item },
                  })
                }
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
