import { StyleSheet } from "react-native";
import { screenWidth, screenHeight } from "@/styles/metrics";
import { globalStyles } from "@/styles/global";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: screenWidth * 0.05,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  headerIconContainer: { flexDirection: "row", gap: 8, alignItems: "center" },
  headerIcon: {
    width: 34,
    height: 34,
    backgroundColor: "#ff812c33",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  notificationContainer: {
    width: 34,
    height: 34,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  currentLocationTextContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "silver",
    borderRadius: 40,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginTop: 24,
  },
  bannerContainer: {
    width: "100%",
    height: 142,
    marginTop: 20,
  },
  bannerImageStyle: {
    borderRadius: 10,
    width: "100%",
  },
  bannerTextContainer:{
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
        width: "60%",
        height: "100%",
        paddingLeft: 16,
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 8,
  },
  bannertextStyle:{
    ...globalStyles.textLarge,
    fontSize: 20,
    color: "#fff",
  },
  bannerButtonContainer:{
    width: 87,
    height: 30,
    backgroundColor: "#101010",
    borderRadius: 40,
    justifyContent: "center",
  },bannerButtonText:{
    color: "#fff",
    ...globalStyles.textHeader,
    textAlign: "center",
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  categoryView: {
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginRight: 5,
    paddingHorizontal: 7,
  },
  imageView: {
    width: 64,
    height: 64,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 999,
  },
});
