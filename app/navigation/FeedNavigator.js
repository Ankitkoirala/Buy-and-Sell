import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../components/ListingScreen";
import ListingDetailsScree from "../screens/ListingDetailsScree";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listing" component={ListingScreen} />
    <Stack.Screen name="ListingDetail" component={ListingDetailsScree} />
  </Stack.Navigator>
);

export default FeedNavigator;
