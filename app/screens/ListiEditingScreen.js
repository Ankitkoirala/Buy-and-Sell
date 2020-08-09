import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Keyboard } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/FormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import colors from "../config/colors";
import FormImagePicker from "../components/forms/FormImagePicker";

import listingApi from "../api/listingss";
import useLoaction from "../components/hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select 1 image."),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: colors.secondary,
    icon: "apps",
  },
  {
    label: "Cloth",
    value: 2,
    backgroundColor: colors.primary,
    icon: "email",
  },
  {
    label: "Cameras",
    value: 3,
    backgroundColor: colors.medium,
    icon: "lock",
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListEditingScreen(props) {
  const location = useLoaction();

  const [upladVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handelSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("could not save listing.");
    }
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        progress={progress}
        visible={upladVisible}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handelSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" onPress={Keyboard.dismiss} />
        <AppFormField maxLength={255} name="title" placeholder="Title" />

        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={150}
        />

        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />

        <AppFormField
          maxLength={255}
          multiline
          name="description"
          placeholder="Description"
          numberOfLines={3}
          placeholder="Description"
        />

        <SubmitButton title="Submit" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default ListEditingScreen;
