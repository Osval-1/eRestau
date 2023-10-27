import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NotificationTile from '../../../components/notification/NotificationTile'

export default function Notification() {
  return (
    <View style={styles.container}>
    <NotificationTile head="Welcome " body="we are at your service for buying and selling"/>
    <NotificationTile head="Order " body="we are at your service for buying and selling"/>
    <NotificationTile head="Maintainance " body="we are at your service for buying and selling"/>
    <NotificationTile head="Promotions " body="we are at your service for buying and selling"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
})