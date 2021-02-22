import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  Button,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../../constants/Colors";
import * as itemsActions from "../../store/actions/items";
import ImageSelector from "../../components/ui/ImageSelector";

const EditItemScreen = (props) => {
  const itemId = props.route.params?.itemId;
  const editedItem = useSelector((state) =>
    state.items.userItems?.find((item) => item.id === itemId)
  );

  const [title, setTitle] = useState(editedItem ? editedItem.title : "ExTitle");
  const [description, setDescription] = useState(
    editedItem ? editedItem.description : ""
  );
  const [category, setCategory] = useState(
    editedItem ? editedItem.category : "ExCategort"
  );
  const [location, setLocation] = useState(
    editedItem ? editedItem.location : ""
  );
  const [image, setImage] = useState(
    editedItem
      ? editedItem.image
      : "https://www.marni.com/12/12386489MT_13_n_r.jpg"
  );
  const [pickedImage, setPickedImage] = useState();
  const [price, setPrice] = useState(
    editedItem ? editedItem.price.toString() : "38"
  );
  const [deliveryType, setDeliveryType] = useState(
    editedItem ? editedItem.deliveryType : "Shipping"
  );

  const dispatch = useDispatch();

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
          <Text style={styles.label}>Image</Text>
          <TextInput
            style={styles.input}
            value={image}
            onChangeText={(text) => setImage(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image Selector</Text>
          {!pickedImage ? (
            <Text>No image picked yet.</Text>
          ) : (
            <View style={styles.imagePreview}>
              <Image style={styles.image} source={{ uri: pickedImage.uri }} />
            </View>
          )}
          <ImageSelector pictureTaken={(picUrl) => setPickedImage(picUrl)} />
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
              dispatch(
                itemsActions.createItem(
                  title,
                  description,
                  category,
                  location,
                  image,
                  pickedImage,
                  price,
                  deliveryType
                )
              );
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
  imagePreview: {
    width: "100%",
    height: 100,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
