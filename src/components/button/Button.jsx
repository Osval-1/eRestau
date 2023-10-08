import { Text, TouchableOpacity } from "react-native";
import themeColor from "../../../themeColor";
import { useNavigation } from "@react-navigation/native";

const Button = ({ title, btnWidth, outlined, maxWidth, onpress ,disabled}) => {
  return (
    <>
      {outlined ? (
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: themeColor.primary,
            minWidth: btnWidth,
            maxWidth: maxWidth,
            padding: 10,
            borderRadius: 5,
          }}
          onPress={()=>onpress()}
        >
          <Text
            style={{
              color: themeColor.primary,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      ) : disabled? (
        <TouchableOpacity
          style={{
            backgroundColor: themeColor.grey_1,
            minWidth: btnWidth,
            maxWidth: maxWidth,
            padding: 10,
            borderRadius: 5,
          }}
          onPress={()=>onpress()}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      ):(
        <TouchableOpacity
          style={{
            backgroundColor: themeColor.primary,
            minWidth: btnWidth,
            maxWidth: maxWidth,
            padding: 10,
            borderRadius: 5,
          }}
          onPress={()=>onpress()}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Button;
