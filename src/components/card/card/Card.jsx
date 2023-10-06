import { StyleSheet, Text, View, Image, Pressable,TouchableOpacity} from "react-native";
import { AntDesign, Entypo, Feather,EvilIcons,FontAwesome } from "@expo/vector-icons";
import themeColor from "../../../../themeColor";
import { globalStyles } from "../../../styles/global";
import { useNavigation } from "@react-navigation/native";


import React from "react";

//all onpress events contain placeholder functions waiting for navigation to be implemented
export default function Card({}) {
  const navigation = useNavigation()

  return (
    <View>
      <Pressable
        style={styles.cardHeader}
        onPress={() => console.log("pressed")}
      >
        <View style={styles.tag}>
          <Text style={{ color: "#fff",...globalStyles.textHeader }}>restaurant</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Text style={globalStyles.textHeader}> View all</Text>
          <View>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </View>
      </Pressable>
      <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={()=>console.log('pressed')}>
        <View>
          <Image
            source={require("../../../../assets/images/restaurant.jpg")}
            style={styles.image}
          />
        </View>
        <View style={{padding:10}}>
          <Text style={globalStyles.textHeader}>Friend's n food</Text>
        <View style={styles.spaceText}>
        <View  style={styles.spaceText}>
            <EvilIcons name="location" size={24} color="black" />
            <Text>Tarred Malingo</Text>
          </View>
          <View  style={styles.spaceText}>
            <Entypo name="thumbs-up" size={24} color="black" />
            <Text>4.7</Text>
          </View>
          
        </View>
        <View style={styles.spaceText}>
        <View style={styles.spaceText}>
        <FontAwesome name="road" size={20} color="black" />
            <Text>2.7KM</Text>
          </View>
          <Pressable style={styles.spaceText} onPress={()=>console.log('pressed')}>
            <Feather name="external-link" size={24} color="black" />
            <Text>Directions</Text>
          </Pressable>
        </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal:10
  },
  tag: {
    backgroundColor: themeColor.primary,
    borderRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
  },
  spaceText:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    gap:4,
  }
});
