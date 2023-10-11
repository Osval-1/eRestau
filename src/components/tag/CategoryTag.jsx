import { StyleSheet, Text, TouchableOpacity,} from 'react-native'
import React from 'react'
import themeColor from '../../../themeColor'
import { globalStyles } from '../../styles/global'

export default function CategoryTag({label}) {
  return (
        <TouchableOpacity style={styles.container}  delayPressIn={50} activeOpacity={0.6} >
      <Text style={globalStyles.textBody}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:8,
        paddingVertical:6,
        backgroundColor:themeColor.grey_0,
        borderRadius:5,
    },text:{
        
    }
})