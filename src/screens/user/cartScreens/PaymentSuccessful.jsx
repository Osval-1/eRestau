import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../styles/global'
import themeColor from '../../../../themeColor'
import Button from "../../../components/button/Button";

export default function PaymentSuccessful({navigation}) {
  return (
    <View style={globalStyles.container}>
      <View style={styles.textView}>
      <Text style={globalStyles.textLarge}>Payment Successful</Text>
      </View>
      <Button title="Home" onpress={()=>navigation.navigate("MainStackTabs",{screen:"Home"})}/>
    </View>
  )
}

const styles = StyleSheet.create({
  textView:{
    marginBottom:20,
  }
})