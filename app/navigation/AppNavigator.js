import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import ListEditingScreen from "../screens/ListiEditingScreen";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";
import Routes from "./Routes";

import navigation from "./RoootNavigator";
import useNotification from "../components/hooks/useNotification";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotification();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListEditingScreen}
        options={({ navigation, route }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(Routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
