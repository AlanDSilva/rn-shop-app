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
import env from "../../env";
import useField from "../../hooks/useField";
import Header from "../../components/ui/Header";

const EditItemScreen = (props) => {
  const itemId = props.route.params?.itemId;
  const editedItem = useSelector((state) =>
    state.items.userItems?.find((item) => item.id === itemId)
  );
  const title = useField(editedItem?.title);
  const description = useField(editedItem?.description);
  const category = useField(editedItem?.category);
  const price = useField(editedItem?.price.toString());
  const location = useField(editedItem?.location);
  const deliveryType = useField(editedItem?.deliveryType);
  const [pickedLocation, setPickedLocation] = useState();

  const [pickedImage, setPickedImage] = useState();
  const [pickedImage2, setPickedImage2] = useState();

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
      location.onChangeText(place.data.features[0].place_name);
    };
    if (pickedLocation) {
      getPlace();
    }
  }, [pickedLocation]);

  const dispatch = useDispatch();

  return (
    <View>
      <Header
        left={{
          icon: "arrow-left",
          onPress: () => {
            props.navigation.goBack();
          },
        }}
        title={"Edit Item"}
        right={{
          icon: "plus",
          onPress: () => {
            console.log("Will add");
          },
        }}
      />
      <View style={{ marginTop: 80 }}>
        <ScrollView>
          <View style={styles.form}>
            <View style={styles.formControl}>
              <Text style={styles.label}>Title</Text>
              <TextInput style={styles.input} {...title} />
            </View>
            <View style={styles.formControl}>
              <Text style={styles.label}>Description</Text>
              <TextInput style={styles.input} {...description} />
            </View>
            <View style={styles.formControl}>
              <Text style={styles.label}>Category</Text>
              <TextInput style={styles.input} {...category} />
            </View>
            <View style={styles.formControl}>
              <Text style={styles.label}>Price</Text>
              <TextInput style={styles.input} {...price} />
            </View>

            <View style={styles.formControl}>
              <Text style={styles.label}>Images Selector</Text>
              <View style={styles.imagesPicker}>
                <ImageSelector
                  pickedImage={pickedImage}
                  pictureTaken={(picUrl) => setPickedImage(picUrl)}
                />
                <ImageSelector
                  pickedImage={pickedImage2}
                  pictureTaken={(picUrl) => setPickedImage2(picUrl)}
                />
              </View>
            </View>

            <View style={styles.formControl}>
              <Text style={styles.label}>Location</Text>
              <TextInput style={styles.input} {...location} />
            </View>
            <View style={styles.formControl}>
              <MapPreview
                onOpenMap={() => {
                  props.navigation.navigate("Map");
                }}
                location={pickedLocation}
              />

              <LocationSelector
                onOpenMap={() => {
                  props.navigation.navigate("Map");
                }}
                locationChosen={(newLocation) => setPickedLocation(newLocation)}
              />
            </View>

            <View style={styles.formControl}>
              <Text style={styles.label}>Delivery Type</Text>
              <TextInput style={styles.input} {...deliveryType} />
            </View>
            <View style={styles.formControl}>
              <Button
                color={Colors.primary}
                title="Submit"
                onPress={() => {
                  itemId
                    ? dispatch(
                        itemsActions.editItem(
                          itemId,
                          title.value,
                          description.value,
                          category.value,
                          location.value,
                          pickedImage,
                          pickedImage2,
                          price.value,
                          deliveryType.value
                        )
                      )
                    : dispatch(
                        itemsActions.createItem(
                          title.value,
                          description.value,
                          category.value,
                          location.value,
                          pickedImage,
                          pickedImage2,
                          price.value,
                          deliveryType.value
                        )
                      );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
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
    width: "50%",
    height: 100,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    padding: 10,
    margin: 10,
  },
  mapPreview: {
    marginBottom: 10,
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  imagesPicker: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
