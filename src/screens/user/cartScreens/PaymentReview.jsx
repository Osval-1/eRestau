import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../styles/global'
import themeColor from '../../../../themeColor'
import Button from "../../../components/button/Button";

export default function PaymentReview({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
      <Text style={{...styles.text}}>Name</Text>
      <Text style={{...styles.text}}>Username</Text>
      </View>
      <View style={styles.textView}>
      <Text style={{...styles.text}}>Phone</Text>
      <Text style={{...styles.text,color:themeColor.primary}}>677678902</Text>
      </View>
      <View style={styles.textView}>
      <Text style={{...styles.text}}>Location</Text>
      <Text style={{...styles.text}}>Tarred Malingo</Text>
      </View>
      <View style={styles.textView}>
      <Text style={{...styles.text}}>Amount</Text>
      <Text style={{...styles.text,color:themeColor.primary}}>5000 FCFA</Text>
      </View>
      <View style={styles.textView}>
      <Text style={{...styles.text}}>Method</Text>
      <Text style={{...styles.text}}>Orange Money</Text>
      </View>
      <View style={styles.textView}>
      <Text style={{...styles.text}}>Delivery Fees</Text>
      <Text style={{...styles.text,color:themeColor.primary}}>500 FCFA</Text>
      </View>
      <View style={styles.textView}>
      <Text style={{...styles.text}}>Restaurant</Text>
      <Text style={{...styles.text}}>Friends n'Food</Text>
      </View>
      <View style={styles.textView}>
      <Text style={{...styles.text}}>Date</Text>
      <Text style={{...styles.text}}>04/21/23</Text>
      </View>
      <Button title={<Text style={globalStyles.textLarge}>Confirm</Text>} onpress={()=>navigation.navigate("Payment Successful")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:10,
    backgroundColor:"#fff",
    gap:20
  },textView:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:5,
    borderBottomWidth:1,
    borderBottomColor:themeColor.grey_1,

  },text:{
    ...globalStyles.textHeader
  }
})