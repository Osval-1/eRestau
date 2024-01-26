import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { globalStyles } from '../../../styles/global'
import themeColor from '../../../../themeColor'
import Button from "../../../components/button/Button";

export default function PaymentSuccessful({navigation}) {
   const [pressed, setPressed] = useState(false)

  useEffect(()=>{
        navigation.addListener('beforeRemove', (e) => {
          // Prevent default behavior of leaving the screen
          e.preventDefault();
          if(pressed){
            navigation.dispatch(e.data.action)
          }
        }
  )}, [navigation,pressed])
  return (
    <View style={globalStyles.container}>
      <View style={styles.textView}>
      <Text style={globalStyles.textLarge}>Orders Passed Successful</Text>
      </View>
      <Button title="Home" onpress={()=>{
        setPressed(true)
        navigation.navigate("MainStackTabs",{screen:"Home"})}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  textView:{
    marginBottom:20,
  }
})