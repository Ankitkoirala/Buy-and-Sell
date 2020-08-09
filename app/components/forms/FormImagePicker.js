import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name, onPress }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  const imageUris = values[name];

  const handelAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handelRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handelAdd}
        onRemoveImage={handelRemove}
        onPress={onPress}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
