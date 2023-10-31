import { StyleSheet, Text, View, ScrollView } from "react-native";

import React from "react";

export default function SearchFood() {

  return (
    <ScrollView contentContainerStyle={styles.container}>

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
