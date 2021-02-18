import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../../constants/Colors";

const EditItemScreen = (props) => {
  const itemId = props.route.params?.itemId;
  const editedItem = useSelector((state) =>
    state.items.userItems.find((item) => item.id === itemId)
  );

  const [title, setTitle] = useState(editedItem ? editedItem.title : "");
  const [description, setDescription] = useState(
    editedItem ? editedItem.description : ""
  );
  const [category, setCategory] = useState(
    editedItem ? editedItem.category : ""
  );
  const [location, setLocation] = useState(
    editedItem ? editedItem.location : ""
  );
  const [image1, setImage1] = useState(editedItem ? editedItem.images[0] : "");
  const [price, setPrice] = useState(
    editedItem ? editedItem.price.toString() : ""
  );
  const [deliveryType, setDeliveryType] = useState(
    editedItem ? editedItem.deliveryType : ""
  );

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Category</Text>
          <TextInput
            style={styles.input}
            value={category}
            onChangeText={(text) => setCategory(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={(text) => setLocation(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={(text) => setPrice(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image1</Text>
          <TextInput
            style={styles.input}
            value={image1}
            onChangeText={(text) => setImage1(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Delivery Type</Text>
          <TextInput
            style={styles.input}
            value={deliveryType}
            onChangeText={(text) => setDeliveryType(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Button
            color={Colors.primary}
            title="Submit"
            onPress={() => {
              console.log("submitting");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditItemScreen;

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: { width: "100%" },
  label: { marginVertical: 8 },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
