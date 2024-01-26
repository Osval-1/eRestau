import {
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    Image
  } from "react-native";
import React,{useState} from 'react'
import Button from "../../../components/button/Button";
import Modal from "react-native-modal";
import themeColor from "../../../../themeColor";
import { globalStyles } from "../../../styles/global";



const VerificationAlertModal = ({onpress}) => {
  return (
    <View>
      <Modal isVisible={true} coverScreen={true}>
        <View style={{ backgroundColor:"white",borderRadius:5,paddingHorizontal:10,paddingVertical:20}}>
          <Text style={{...globalStyles.textLarge,textAlign:"center",marginVertical:10}}>About Verification</Text>
          <Text
         style={globalStyles.textBody}>All restaurants need to go through a verification process before products can be uploaded on our platform</Text>
          <Text style={globalStyles.textBody}>We will visit you to complete this process</Text>
          <Text style={{...globalStyles.textBody,marginBottom:10}}>Thanks for your Understanding</Text>
          <Button title="Ok" btnWidth="30%" onpress={onpress} />
        </View>
      </Modal>
    </View>
  )
}

export default VerificationAlertModal

const styles = StyleSheet.create({})