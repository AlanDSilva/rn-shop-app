import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const ImageSelector = ({ pictureTaken, pickedImage }) => {
  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!", [
        { text: "Okay" },
      ]);
      return false;
    }
    return true;
  };
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    const fileNameSplit = image.uri.split("/");
    const fileName = fileNameSplit[fileNameSplit.length - 1];
    const picData = {
      uri: image.uri,
      name: fileName,
      type: "image/jpg",
    };

    pictureTaken(picData);
  };
  return (
    <TouchableOpacity onPress={takeImageHandler} style={styles.imagePreview}>
      {!pickedImage ? (
        <Ionicons name="md-camera" size={50} color={Colors.primary} />
      ) : (
        <Image style={styles.image} source={{ uri: pickedImage.uri }} />
      )}
    </TouchableOpacity>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  imagePicker: {
    flexDirection: "row",
    alignItems: "center",
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
  },
});
