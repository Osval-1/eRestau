import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../styles/global'
import themeColor from '../../../../themeColor'
import Button from "../../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";


export default function PaymentReview({navigation}) {

  const user = useSelector((state) =>state.auth.user )
  const cartInfo = useSelector((state)=>state.cart)

  return (
    <View style={styles.container}>
    <Text style={{...globalStyles.textHeader,textAlign:"center",fontSize:20}}>Details</Text>
      <View style={styles.textView}>
      <Text style={{...styles.leftText}}>Name</Text>
      <Text style={{...styles.rightText}}>{user.username}</Text>
      </View>
      <View style={styles.textView}>
      <Text style={{...styles.leftText}}>Phone</Text>
      <Text style={{...styles.rightText,color:themeColor.primary}}>{user.phone}</Text>
      </View>
      <View style={styles.textView}>
      <Text style={{...styles.leftText}}>Location</Text>
      <Text style={{...styles.rightText}}>{user.location}</Text>
      </View>
      <View style={styles.textView}>
      <Text style={{...styles.leftText}}>Amount</Text>
      <Text style={{...globalStyles.textHeader,color:themeColor.primary}}>{cartInfo.total} FCFA</Text>
      </View>
      <View style={styles.textView}>
      <Text style={{...styles.leftText}}>Method</Text>
      <Text style={{...styles.rightText}}>{cartInfo.deliveryInfo.paymentMethod}</Text>
      </View>
      <View style={styles.textView}>
      <Text style={{...styles.leftText}}>Delivery Fees</Text>
      <Text style={{...globalStyles.textHeader,color:themeColor.primary}}>500 FCFA</Text>
      </View>
      {/* <View style={styles.textView}>
      <Text style={{...styles.leftText}}>Restaurant</Text>
      <Text style={{...styles.rightText}}>Friends n'Food</Text>
      </View> */}
      <View style={styles.textView}>
      <Text style={{...styles.leftText}}>Date</Text>
      <Text style={{...styles.rightText}}>04/21/23</Text>
      </View>
      <Button title="Confirm" onpress={()=>{
        console.log(cartInfo)
        navigation.navigate("Payment Successful")}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:20,
    backgroundColor:"#fff",
    gap:20
  },textView:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:5,
    borderBottomWidth:1,
    borderBottomColor:themeColor.grey_0,

  },rightText:{
    ...globalStyles.textHeader,
    textTransform:"capitalize"

  },
  leftText:{
    ...globalStyles.textBody,
    textTransform:"capitalize"
    // fontSize:14,
    // color:themeColor.grey_2,
  },
})