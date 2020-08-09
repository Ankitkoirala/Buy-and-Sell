import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
  onPress,
}) {
  const scrollView = useRef();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <ScrollView
          horizontal
          ref={scrollView}
          onContentSizeChange={() => scrollView.current.scrollToEnd()}
        >
          <View style={styles.container}>
            {imageUris.map((uri) => (
              <View key={uri} style={styles.image}>
                <ImageInput
                  imageUri={uri}
                  onChangeImage={() => onRemoveImage(uri)}
                />
              </View>
            ))}
            <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
  },
  image: {},
});

export default ImageInputList;
