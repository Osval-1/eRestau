import { StyleSheet,View,Text} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";


export default function Loader() {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={require("../../../assets/animations/loader.json")}
        speed={0.5}
        colorFilters={[{keypath: 'Plane', color: 'rgb(255, 100, 0)'}]}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'#fff',
    width:'100%',
    height:"100%",
    position:'absolute',
    top:0,
    left:0,
    zIndex:999
  }
});
