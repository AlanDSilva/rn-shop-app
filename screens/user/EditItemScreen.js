import React, { useState, useEffect } from "react";
import axios from "axios";
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
import LocationSelector from "../../components/ui/LocationSelector";
import MapPreview from "../../components/ui/MapPreview";
import { pick } from "lodash";
import env from "../../env";

const EditItemScreen = (props) => {
  const itemId = props.route.params?.itemId;
  const editedItem = useSelector((state) =>
    state.items.userItems?.find((item) => item.id === itemId)
  );

  const [title, setTitle] = useState(editedItem ? editedItem.title : "ExTitle");
  const [description, setDescription] = useState(
    editedItem ? editedItem.description : "Description Example"
  );
  const [category, setCategory] = useState(
    editedItem ? editedItem.category : "ExCategort"
  );
  const [location, setLocation] = useState(
    editedItem ? editedItem.location : "Location Example"
  );
  const [pickedLocation, setPickedLocation] = useState();
  const [image, setImage] = useState(
    editedItem
      ? editedItem.image
      : "https://www.marni.com/12/12386489MT_13_n_r.jpg"
  );
  const [pickedImage, setPickedImage] = useState();
  const [pickedImage2, setPickedImage2] = useState();
  const [price, setPrice] = useState(
    editedItem ? editedItem.price.toString() : "38"
  );
  const [deliveryType, setDeliveryType] = useState(
    editedItem ? editedItem.deliveryType : "Shipping"
  );

  useEffect(() => {
    if (props.route.params?.pickedLocation) {
      setPickedLocation(props.route.params.pickedLocation);
    }
  }, [props.route.params?.pickedLocation]);

  useEffect(() => {
    const getPlace = async () => {
      console.log(pickedLocation);
      const place = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickedLocation.lon.toFixed(
          3
        )},${pickedLocation.lat.toFixed(3)}.json?types=address&access_token=${
          env.MAPBOX_ACCESS_TOKEN
        }`
      );
      console.log(place.data.features[0].place_name);
      setLocation(place.data.features[0].place_name);
    };
    if (pickedLocation) {
      getPlace();
    }
  }, [pickedLocation]);

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
          <Text style={styles.label}>Image Selector</Text>
          {!pickedImage2 ? (
            <Text>No image picked yet.</Text>
          ) : (
            <View style={styles.imagePreview}>
              <Image style={styles.image} source={{ uri: pickedImage2.uri }} />
            </View>
          )}
          <ImageSelector pictureTaken={(picUrl) => setPickedImage2(picUrl)} />
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
          {!pickedLocation ? (
            <Text>No location picked yet.</Text>
          ) : (
            <MapPreview
              onOpenMap={() => {
                props.navigation.navigate("Map");
              }}
              location={pickedLocation}
            />
          )}
          <LocationSelector
            onOpenMap={() => {
              props.navigation.navigate("Map");
            }}
            locationChosen={(newLocation) => setPickedLocation(newLocation)}
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
              dispatch(
                itemsActions.createItem(
                  title,
                  description,
                  category,
                  location,
                  image,
                  pickedImage,
                  pickedImage2,
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
  mapPreview: {
    marginBottom: 10,
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
