import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import env from "../../env";
import Colors from "../../constants/Colors";

const MapPreview = ({ location, onOpenMap }) => {
  const imagePreviewUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l+111(${location?.lon},${location?.lat})/${location?.lon},${location?.lat},14/500x300?access_token=${env.MAPBOX_ACCESS_TOKEN}`;
  return (
    <TouchableOpacity onPress={onOpenMap} style={styles.mapPreview}>
      {!location ? (
        <Ionicons name="md-map" size={50} color={Colors.primary} />
      ) : (
        <Image style={styles.image} source={{ uri: imagePreviewUrl }} />
      )}
    </TouchableOpacity>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  mapPreview: {
    marginBottom: 10,
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
