import React from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import AppText from "../components/Text";
import colors from "../config/colors";
import ListItem from "../components/list/ListItem";
import { Image } from "react-native-expo-image-cache";
import ContactForm from "../components/ContactForm";

function ListingDetailsScree({ route }) {
  const listing = route.params;
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <ScrollView>
        <Image
          style={styles.image}
          uri={listing.images[0].url}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.subtitle}>Rs{listing.price}</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/mula.jpg")}
              title="Tuchi Mula"
              subtitle="5 Listings"
            />
          </View>
          <ContactForm listing={listing} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScree;
