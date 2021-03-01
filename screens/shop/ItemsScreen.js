import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import RNPickerSelect from "react-native-picker-select";
import _ from "lodash";

import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import * as itemsActions from "../../store/actions/items";
import Header from "../../components/ui/Header";

import Colors from "../../constants/Colors";

const CustomSearchBar = ({ setCat, setLoc, setOPrice, setODate }) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          placeholder={{ label: "Category" }}
          onValueChange={(value) => {
            setCat(value);
          }}
          items={[
            { label: "Clothes", value: "Clothes" },
            { label: "Shoes", value: "Shoes" },
            { label: "Kitchen", value: "Kitchen" },
          ]}
        />
      </View>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          placeholder={{ label: "City" }}
          onValueChange={(value) => {
            setLoc(value);
          }}
          items={[
            { label: "Oulu", value: "Oulu" },
            { label: "Helsinki", value: "Helsinki" },
            { label: "Tampere", value: "Tampere" },
            { label: "Turku", value: "Turku" },
          ]}
        />
      </View>

      <View style={styles.pickerContainer}>
        <RNPickerSelect
          placeholder={{ label: "Price" }}
          onValueChange={(value) => {
            setOPrice(value);
          }}
          items={[
            { label: "Price (asc)", value: "asc" },
            { label: "Price (desc)", value: "desc" },
          ]}
        />
      </View>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          placeholder={{ label: "Date" }}
          onValueChange={(value) => {
            setODate(value);
          }}
          items={[
            { label: "Date (asc)", value: "asc" },
            { label: "Date (desc)", value: "desc" },
          ]}
        />
      </View>
    </View>
  );
};

const ItemsScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [cat, setCat] = useState("");
  const [loc, setLoc] = useState("");
  const [oPrice, setOPrice] = useState("");
  const [oDate, setODate] = useState("");
  const products = useSelector((state) => state.items.availableItems);
  const cart = useSelector((state) => state.cart.items);
  const alreadyInCart = _.intersectionBy(products, cart, "id");
  const dispatch = useDispatch();

  useEffect(() => {
    const loadItems = async () => {
      setIsLoading(true);
      await dispatch(itemsActions.fetchItems(cat, loc, oPrice, oDate));
      setIsLoading(false);
    };
    loadItems();
  }, [dispatch, cat, loc, oPrice, oDate]);

  const selectItemHandler = (id, title) => {
    props.navigation.navigate("Item Details", {
      itemId: id,
      itemTitle: title,
    });
  };

  return (
    <View>
      <Header
        left={{
          icon: "menu",
          onPress: () => {
            props.navigation.openDrawer();
          },
        }}
        title={"Items"}
        right={{
          icon: "shopping-bag",
          onPress: () => {
            props.navigation.navigate("Cart");
          },
        }}
      />
      <View style={{ marginTop: 90 }}>
        <CustomSearchBar
          setCat={setCat}
          setLoc={setLoc}
          setOPrice={setOPrice}
          setODate={setODate}
        />

        {isLoading ? (
          <View style={styles.centered}>
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
        ) : !isLoading && products.length === 0 ? (
          <View style={styles.centered}>
            <Text>No products found! Maybe start adding some!</Text>
          </View>
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <ProductItem
                {...itemData.item}
                onSelect={() => {
                  selectItemHandler(itemData.item.id, itemData.item.title);
                }}
              >
                <Button
                  color={Colors.primary}
                  title="View Iem"
                  onPress={() => {
                    selectItemHandler(itemData.item.id, itemData.item.title);
                  }}
                />
                <Button
                  color={Colors.primary}
                  title={"ToCart"}
                  onPress={() => {
                    dispatch(cartActions.addToCart(itemData.item));
                  }}
                />
              </ProductItem>
            )}
            numColumns={2}
          />
        )}
      </View>
    </View>
  );
};

export default ItemsScreen;

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  pickerContainer: {
    width: "20%",
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 4,
    color: Colors.secondary,
  },

  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputContainerStyle: {
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 4,
    borderColor: Colors.primary,
  },
});
