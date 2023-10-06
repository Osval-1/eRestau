import { StyleSheet } from "react-native";
import themeColor from "../../themeColor";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 5,
    width: "100%",
  },
  // form styles
  form: {
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  inputView: {
    borderWidth: 2,
    borderColor: themeColor.primary,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    flexDirection: "row",
  },
  passwordInputView: {
    borderWidth: 2,
    borderColor: themeColor.primary,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    width: "93%",
  },
  //typography styles
  textLarge: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  textHeader: {
    fontSize: 16,
    fontWeight: "600",
  },
  textBody: {
    fontSize: 14,
    fontWeight: "400",
  },
  textGrey: {
    color: themeColor.grey_2,
    fontSize: 14,
    fontWeight: "400",
  },
});
