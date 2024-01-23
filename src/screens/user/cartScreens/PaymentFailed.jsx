import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../styles/global'
import themeColor from '../../../../themeColor'
import Button from "../../../components/button/Button";

export default function PaymentFailed() {
  return (
    <View style={globalStyles.container}>
      <View style={styles.textView}>
      <Text style={globalStyles.textLarge}>Payment Failed</Text>
      </View>
      <Button title="Retry" onpress={()=>navigation.goBack()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  textView:{
    marginBottom:20,
  }
})