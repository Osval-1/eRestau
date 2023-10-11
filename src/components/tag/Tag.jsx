import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global'
import themeColor from '../../../themeColor'
import {
    AntDesign,
  } from "@expo/vector-icons";

export default function tag({label,onpress}) {
  return (
    <View>
      <Pressable
        style={styles.cardHeader}
        // onPress={onpress}
      >
        <View style={styles.tag}>
          <Text style={{ color: "#fff", ...globalStyles.textHeader }}>
            {label}
          </Text>
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
    </View>
  )
}

const styles = StyleSheet.create({
    tag: {
        backgroundColor: themeColor.primary,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 2,
      },
      cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
      },
})