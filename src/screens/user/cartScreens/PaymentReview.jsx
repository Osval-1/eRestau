import { StyleSheet, Text, View,Linking } from 'react-native'
import React,{useState} from 'react'
import { globalStyles } from '../../../styles/global'
import themeColor from '../../../../themeColor'
import Button from "../../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../redux/reducers/user/cartReducer";
import Loader from "../../../components/loader/Loader";
import { useToast } from "react-native-paper-toast";






export default function PaymentReview({navigation}) {
const [loading, setLoading] = useState(false);

  const toaster = useToast();
  const dispatch = useDispatch();
  const user = useSelector((state) =>state.auth.user )
  const cartInfo = useSelector((state)=>state.cart)

  const placeOrder = async (cart) => {
    if (!cart[0]) {
      return;
    }
    setLoading(true);
    try {
      const response = await dispatch(setCart(cart)).unwrap();
      console.log(response);
      toaster.show({
        message: "Orders passed",
        type: "success",
        position: "top",
      });
      navigation.navigate("Payment Successful")
    } catch (error) {
      console.log(error);
      toaster.show({
        message: "Order Failed, Please check your connection!",
        type: "error",
        position: "top",
      });
      if (error.message) {
        console.log(error.message);
        toaster.show({
          message: "Order Failed, Please check your connection!",
          type: "error",
          position: "top",
        });
      }
    }
    setLoading(false);
  };


  if (loading) return <Loader />;
  return (
    <View style={styles.container}>
    <Text style={{...globalStyles.textHeader,textAlign:"center",fontSize:20}}>Details</Text>
      <View style={styles.textView}>
      <Text style={{...styles.leftText}}>Name</Text>
      <Text style={{...styles.rightText}}>{user.username}</Text>
      </View>
      <View style={styles.textView}>
      <Text style={{...styles.leftText}}>Phone</Text>
      <Text style={{...styles.rightText,color:themeColor.primary}}>{cartInfo.deliveryInfo.paymentPhone}</Text>
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
      <View style={styles.textView}>
      <Text style={{...styles.leftText}}>Date</Text>
      <Text style={{...styles.rightText}}>{cartInfo.deliveryInfo.date}</Text>
      </View>
      <Button title="Confirm" onpress={()=>{
        const deliveryNumber = cartInfo.deliveryInfo.paymentPhone
        const cart = cartInfo.cart.map((item)=>{
          return {...item,deliveryNumber}
        })
        console.log(cart)
        placeOrder(cart)
        // const message = "the message works"
        // Linking.openURL(`whatsapp://send?text=${message}&phone=+237${cartInfo.deliveryInfo.paymentPhone}`)
        }}/>
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