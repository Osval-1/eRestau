import { StyleSheet, Text, View ,TouchableOpacity,Image,TextInput} from 'react-native'
import React,{useState} from 'react'
import { globalStyles } from '../../../styles/global'
import themeColor from '../../../../themeColor'
import Button from "../../../components/button/Button";


export default function PaymentMethod({navigation}) {
  const [Payment, setPayment] = useState('')
  return (
    <View style={styles.container}>
      <Text style={ {...globalStyles.textLarge,textAlign:"center",marginBottom:20}}> Select Payment Method</Text>
      <TouchableOpacity activeOpacity={0.6}
        onPress = {()=>setPayment("MTN")}
        delayPressIn={50} 
        style={{
          padding:10,
          flexDirection:"row",
          alignItems:'center',
          gap:20,
          borderWidth:Payment === "MTN"?2:null,
          borderRadius:2,
          borderColor:themeColor.primary,
          marginBottom:20

        }} >

      <Image
          source={require("../../../../assets/images/MTN.png")}
          style={styles.image}
          />

          <View style={styles.textView}>
      <Text style={globalStyles.textLarge}>MTN MOBILE MONEY</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}
        onPress = {()=>setPayment("ORANGE")}
        delayPressIn={50} 
        style={{
          padding:10,
          flexDirection:"row",
          alignItems:'center',
          gap:20,
          borderWidth:Payment === "ORANGE"?2:null,
          borderRadius:2,
          borderColor:themeColor.primary,
          marginBottom:20
        }} >
      <Image
          source={require("../../../../assets/images/ORANGE.png")}
          style={styles.image}
          />
          <View style={styles.textView}>
      <Text style={globalStyles.textLarge}>ORANGE MONEY</Text>
          </View>
      </TouchableOpacity>

      <View style={globalStyles.inputView}>
      <TextInput
                style={globalStyles.textInput}
                placeholder="Phone Number"
                onChangeText={(value) => console.log(value)}
              />
      </View>
      <Button title={<Text style={globalStyles.textLarge}>PAY</Text>} btnWidth ={"50%"} onpress={()=>navigation.navigate("Payment Review")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:10,
    paddingHorizontal:10,
    backgroundColor:"#fff",
  },image: {
    flex:2
},
  textView:{
    flex:3
  },

})