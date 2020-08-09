import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccountScreen from "../screens/MyAccountScreen";
import MessagesScree from "../screens/MessagesScree";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={MyAccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScree} />
  </Stack.Navigator>
);

export default AccountNavigator;
