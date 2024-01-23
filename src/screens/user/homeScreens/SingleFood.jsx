import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Card from "../../../components/card/card/Card";
// import CategoryTag from "../../../components/tag/CategoryTag";
import { Entypo, Feather, EvilIcons, FontAwesome } from "@expo/vector-icons";
import themeColor from "../../../../themeColor";
import { globalStyles } from "../../../styles/global";
import Button from "../../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenu } from "../../../redux/reducers/restau/menuReducer";
import {
  incrementCount,
  decrementCount,
  addToCart,
  resetCount,
} from "../../../redux/reducers/user/cartReducer";
import MenuCard from "../../../components/card/MenuCard/MenuCard";
import { useToast } from "react-native-paper-toast";

export default function SingleFood({ navigation, route }) {
  const { item } = route.params;
  const [loading, setLoading] = useState(false);

  const toaster = useToast();
  const dispatch = useDispatch();

  const menu = useSelector((state) =>
    state.menu.filter((menus) => menus._id != item._id)
  );
  const count = useSelector((state) => state.cart.count);
  const user = useSelector((state) => state.auth.user);

  const getMenu = async () => {
    try {
      setLoading(true);
      const response = await dispatch(getAllMenu(item.owner)).unwrap();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const incrementcount = () => {
    if (count === 10) {
      return;
    }
    dispatch(incrementCount());
  };
  const decrementcount = () => {
    if (count === 1) {
      return;
    }
    dispatch(decrementCount());
  };

  useEffect(() => {
    getMenu();
    dispatch(resetCount());
    console.log(item);
  }, []);
  //                    !!!TODO
  // implement loading for the menu fetching on the page
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card
          onpress={() => console.log(menu)}
          label={item.name}
          image={item.image}
          price={item.price}
          location={item.ownerLocation}
          category={item.category}
          ownerName={item.ownerName}
        />
        <View style={styles.orderView}>
          <View style={styles.amountView}>
            <TouchableOpacity onPress={decrementcount}>
              <Entypo name="minus" size={24} color={themeColor.primary} />
            </TouchableOpacity>
            <Text style={globalStyles.textLarge}>{count}</Text>
            <TouchableOpacity onPress={incrementcount}>
              <Entypo name="plus" size={24} color={themeColor.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonView}>
            <Button
              title={<Text style={globalStyles.textHeader}>Add to cart</Text>}
              btnWidth="100%"
              onpress={() => {
                dispatch(
                  addToCart({
                    amount: count,
                    name: item.name,
                    price: item.price,
                    owner: item.owner,
                    id: user.id,
                    image: item.image,
                    ownerName: item.ownerName,
                    username: user.username,
                    ownerLocation: item.ownerLocation,
                    customerLocation: user.location,
                  })
                );
                toaster.show({
                  message: "Order added to Cart",
                  type: "success",
                  position: "top",
                });
              }}
            />
          </View>
        </View>
        <Text
          style={{
            ...globalStyles.textLarge,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Menu
        </Text>
        {!menu[0] ? (
          <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={globalStyles.textHeader}>No menu found</Text>
              <Text style={globalStyles.textBody}>no meals here to view</Text>
            </View>
          </View>
        ) : (
          menu.map((menuItem) => {
            //   TODO
            // find a better way to implement the passing of data
            // this is a workaround to make the item destructuring from route.params work
            var item = menuItem
            return (
              <MenuCard
                key={menuItem._id}
                label={menuItem.name}
                image={menuItem.image}
                price={menuItem.price}
                onpress={() =>
                  navigation.navigate("HomeStack", {
                    screen: "SingleFood",
                    params: { item },
                  })
                }
              />
            );
          })
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  tagView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 4,
    marginBottom: 20,
  },
  orderView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    gap: 80,
  },
  amountView: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 5,
    borderColor: "#EFEDED",
    borderWidth: 1,
  },
  buttonView: {
    flex: 3,
  },
});
