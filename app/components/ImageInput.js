import React, { useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import colors from "../config/colors";
import IconComponent from "./Icon";
import * as ImagePicker from "expo-image-picker";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function ImageInput({ imageUri, onChangeImage, style, onPress }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to enable camera");
  };
  const handelPress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are You Sure?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No ", onPress: null },
      ]);
    }
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Please try again", error);
    }
  };

  return (
    <TouchableOpacity onPress={handelPress}>
      <View style={styles.container} onPress={onPress}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 15,
    marginVertical: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
