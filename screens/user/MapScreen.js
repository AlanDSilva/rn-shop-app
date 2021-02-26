import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import Header from "../../components/ui/Header";

export default function MapScreen(props) {
  const [selectedLocation, setSelectedLocation] = useState();

  const myRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lon: event.nativeEvent.coordinate.longitude,
    });
  };

  const savePickedLocationHandler = () => {
    if (!selectedLocation) {
      return;
    }
    props.navigation.navigate("EditItem", { pickedLocation: selectedLocation });
  };

  let markerCoordinates;
  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lon,
    };
  }
  return (
    <View style={styles.container}>
      <MapView style={styles.map} onPress={selectLocationHandler}>
        {markerCoordinates && (
          <Marker
            title="Picked Location"
            coordinate={markerCoordinates}
          ></Marker>
        )}
      </MapView>
      <Header
        left={{
          icon: "arrow-left",
          onPress: () => {
            props.navigation.goBack();
          },
        }}
        title={"Pick Location"}
        right={{
          icon: "plus",
          onPress: savePickedLocationHandler,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
