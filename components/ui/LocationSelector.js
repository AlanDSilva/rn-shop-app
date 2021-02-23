import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";

import { Colors } from "react-native/Libraries/NewAppScreen";

const LocationSelector = ({ onOpenMap }) => {
  const [isFetching, setIsFetching] = useState(false);
  const verifyPermissions = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need location permissions to make this work!", [
        { text: "Okay" },
      ]);
      return false;
    }
    return true;
  };
  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000,
      });
      locationChosen({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
    } catch (err) {
      alert("Could not fetch location!");
    }
    setIsFetching(false);
  };

  const pickOnMapHandler = () => {};
  return (
    <View style={styles.locationPicker}>
      {isFetching ? (
        <ActivityIndicator size="small" color={Colors.primary} />
      ) : (
        <View style={styles.actions}>
          <Button
            title="Get Current Location"
            color={Colors.primary}
            onPress={getLocationHandler}
          />
          <Button
            title="Choose Location"
            color={Colors.secondary}
            onPress={onOpenMap}
          />
        </View>
      )}
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 10,
  },
  mapPreview: {
    marginBottom: 10,
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
