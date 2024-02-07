import React, { useState, useEffect } from "react";
import {
  Platform,
  Text,
  View,
    StyleSheet,
    Dimensions,
} from "react-native";
import * as Location from "expo-location";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function UserMap() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true,
        accuracy: Location.Accuracy.Highest,});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(text, location);
  }
  return (
    <View>
      {/* <MapView style={styles.map}
      showsUserLocation={true}
      followsUserLocation={true}
      >
      {location && <Marker coordinate={location.coords} />}
      </MapView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
